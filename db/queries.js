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

  const bookTableQuery =
    "INSERT INTO books (title,genre, publisher, year_published, edition, author_first_name, author_last_name) VALUES ($1,$2,$3,$4,$5,$6,$7)";
  const bookTableValues = [
    title,
    genre.replaceAll(" ", ""),
    publisher,
    year_published,
    edition,
    first_name,
    last_name,
  ];

  await pool.query(bookTableQuery, bookTableValues);
}

async function getAllCategories() {
  const text = "SELECT DISTINCT genre from books";
  const { rows } = await pool.query(text);
  return rows;
}

async function getBooksMatchingGenre(genre) {
  const query = "SELECT * FROM books WHERE genre =  $1";
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
module.exports = {
  getAllBooks,
  addBookToDB,
  getAllCategories,
  getBooksMatchingGenre,
  getBooksMatchingTitle,
  getBookFromID,
};
