const pool = require("./pool");

async function getAllBooks() {
  const { rows } = await pool.query("SELECT * FROM books");
  return rows;
}
async function addBookToDB(book) {
  const {
    title,
    first_name,
    last_name,
    year_published,
    publisher,
    edition,
    genre,
  } = book;
  const genreID = await pool.query("SELECT id FROM genres WHERE name = $1", [
    genre,
  ]);

  const bookTableQuery =
    "INSERT INTO books (title,genre_id, publisher, year_published, edition, author_first_name, author_last_name) VALUES ($1,$2,$3,$4,$5,$6,$7)";
  const bookTableValues = [
    title,
    genreID.rows[0].id,
    publisher,
    year_published,
    edition,
    first_name,
    last_name,
  ];

  await pool.query(bookTableQuery, bookTableValues);
}

async function getAllCategories() {
  const text = "SELECT  id, name from genres";
  const { rows } = await pool.query(text);
  return rows;
}

async function getBooksMatchingGenre(genre) {
  const query =
    "SELECT books.id, books.title, books.author_first_name, books.author_last_name FROM books INNER JOIN genres ON books.genre_id = genres.id WHERE genres.name = $1";
  const values = [genre];
  const { rows } = await pool.query(query, values);
  return rows;
}
async function getBooksMatchingTitle(search_term) {
  const query = `SELECT * from books WHERE LOWER(title) LIKE LOWER('%' ||$1|| '%')`;
  const values = [search_term];
  const { rows } = await pool.query(query, values);
  return rows;
}
async function getBookFromID(id) {
  const query = "SELECT * FROM books WHERE id = $1";
  const values = [id];
  const { rows } = await pool.query(query, values);
  return rows;
}
async function deleteBookByID(id) {
  const query = "DELETE FROM books WHERE id = $1";
  const values = [id];
  await pool.query(query, values);
}
async function getGenreNameFromID(id) {
  const { rows } = await pool.query("SELECT name FROM genres WHERE id = $1", [
    id,
  ]);
  return rows[0].name;
}
async function addGenreToDB(genre) {
  const query = "INSERT INTO genres (name) VALUES ($1)";
  const values = [genre];
  await pool.query(query, values);
}
async function deleteGenreFromDB(genre) {
  const getUnknownID = await pool.query(
    "SELECT id FROM genres WHERE name = 'unknown' "
  );
  const unknownID = getUnknownID.rows[0].id;

  const getGenreID = await pool.query("SELECT id FROM genres WHERE name = $1", [
    genre,
  ]);
  const genreID = getGenreID.rows[0].id;

  const query = "UPDATE books SET genre_id = $1 WHERE genre_id = $2";
  const values = [unknownID, genreID];
  await pool.query(query, values);

  // Lastly delete the old genre
  await pool.query("DELETE FROM genres WHERE name = $1", [genre]);
}
async function updateBookDetails(id, book) {
  const {
    title,
    author_first_name,
    author_last_name,
    genre,
    year_published,
    edition,
    publisher,
  } = book;

  const getGenreID = await pool.query("SELECT id FROM genres WHERE name = $1", [
    genre,
  ]);
  const genreID = getGenreID.rows[0].id;

  const query = `UPDATE books SET title = $1, 
                                  author_first_name = $2,
                                  author_last_name = $3,
                                  genre_id = $4,
                                  year_published = $5,
                                  publisher = $6,
                                  edition = $7
                WHERE id = $8
`;
  const values = [
    title,
    author_first_name,
    author_last_name,
    parseInt(genreID),
    parseInt(year_published),
    publisher,
    edition,
    id,
  ];
  await pool.query(query, values);
}
async function updateGenre(newName, currentName) {
  const query = "UPDATE genres SET name = $1 WHERE name = $2";
  const values = [newName, currentName];
  await pool.query(query, values);
}

module.exports = {
  getAllBooks,
  addBookToDB,
  getAllCategories,
  getBooksMatchingGenre,
  getBooksMatchingTitle,
  getBookFromID,
  deleteBookByID,
  getGenreNameFromID,
  addGenreToDB,
  deleteGenreFromDB,
  updateBookDetails,
  updateGenre,
};
