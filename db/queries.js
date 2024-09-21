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
  const text = "SELECT  name from genres";
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
module.exports = {
  getAllBooks,
  addBookToDB,
  getAllCategories,
  getBooksMatchingGenre,
  getBooksMatchingTitle,
  getBookFromID,
  deleteBookByID,
  getGenreNameFromID,
};
