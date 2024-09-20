const db = require("../db/queries");

async function indexRouterGet(req, res) {
  const books = await db.getAllBooks();
  res.render("index", { books: books });
}

function addBookRouterGet(req, res) {
  res.render("addBookPage");
}
async function addBookRouterPost(req, res) {
  await db.addBookToDB(req.body);
  res.redirect("/");
}
async function viewBookGet(req, res) {
  const book = await db.getBookFromID(req.params.id);
  res.render("viewBookPage", { book: book[0] });
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
