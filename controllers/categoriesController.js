const db = require("../db/queries");

async function categoriesRouterGet(req, res) {
  const genres = await db.getAllCategories();
  const bookMatchingGenre = await db.getBooksMatchingGenre(req.query.genre);
  if (req.query.delete) {
    await db.deleteGenreFromDB(req.query.genre);
    res.redirect("/categories");
  }
  res.render("viewCategoryPage", {
    genres: genres,
    url: req.originalUrl,
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
