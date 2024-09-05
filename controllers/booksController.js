const db = require("../db/queries");

async function indexRouterGet(req, res) {
  const books = await db.getAllBooks();
  res.render("index", { books: books });
}

function addBookRouterGet(req, res) {
  res.render("addBook");
}

module.exports = {
  indexRouterGet,
  addBookRouterGet,
};
