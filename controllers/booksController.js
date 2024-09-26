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
async function editBookGet(req, res) {
  const book = await db.getBookFromID(req.params.id);
  const currentGenre = await db.getGenreNameFromID(book[0].genre_id);
  const genres = await db.getAllCategories();
  res.render("editBookPage", {
    book: book[0],
    currentGenre: currentGenre,
    genres: genres,
  });
}
async function editBookPost(req, res) {
  await db.updateBookDetails(req.params.id, req.body);
  res.redirect(`/book/${req.params.id}/view`);
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
  editBookGet,
  editBookPost,
  deleteBookGet,
};
