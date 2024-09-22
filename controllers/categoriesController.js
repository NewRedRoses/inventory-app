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
  await db.addGenreToDB(req.body.genre_to_add);
  res.redirect("back");
}

module.exports = {
  categoriesRouterGet,
  addCategoryPost,
};
