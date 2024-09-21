const db = require("../db/queries");

async function categoriesRouterGet(req, res) {
  const genres = await db.getAllCategories();
  const bookMatchingGenre = await db.getBooksMatchingGenre(req.query.genre);

  res.render("viewCategoryPage", {
    genres: genres,
    searchedGenre: req.query.genre,
    booksMatchingGenre: bookMatchingGenre,
  });
}
async function addCategoryPost(req, res) {
  res.send("test");
}

module.exports = {
  categoriesRouterGet,
  addCategoryPost,
};
