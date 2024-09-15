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
module.exports = {
  indexRouterGet,
  addBookRouterGet,
  addBookRouterPost,
};
