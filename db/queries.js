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
    date_published,
    publisher,
    edition,
    genre,
  } = book;

  const bookTableQuery =
    "INSERT INTO books (title,genre, publisher, date_published, edition, author_first_name, author_last_name) VALUES ($1,$2,$3,$4,$5,$6,$7)";
  const bookTableValues = [
    title,
    genre,
    publisher,
    date_published,
    edition,
    first_name,
    last_name,
  ];

  await pool.query(bookTableQuery, bookTableValues);
}
module.exports = {
  getAllBooks,
  addBookToDB,
};
