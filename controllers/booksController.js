const db = require("../db/queries");

async function indexRouterGet(req, res) {
  const books = await db.getAllBooks();
  res.render("index", { books: books });
}

async function addBookRouterGet(req, res) {
  const genres = await db.getAllCategories();
  res.render("addBookPage", { genres: genres });
}
async function addBookRouterPost(req, res) {
  await db.addBookToDB(req.body);
  res.redirect("/");
}
async function viewBookGet(req, res) {
  const book = await db.getBookFromID(req.params.id);
  const genre = await db.getGenreNameFromID(book[0].genre_id);
  res.render("viewBookPage", { book: book[0], genre: genre });
}
async function deleteBookGet(req, res) {
  await db.deleteBookByID(req.params.id);
  res.redirect("/");
}

module.exports = {
  indexRouterGet,
  addBookRouterGet,
  addBookRouterPost,
  viewBookGet,
  deleteBookGet,
};
