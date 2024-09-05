const db = require("../db/queries");

async function indexRouterGet(req, res) {
  const books = await db.getAllBooks();
  res.render("index", { books: books });
}

module.exports = {
  indexRouterGet,
};
