const db = require("../db/queries");

async function categoriesRouterGet(req, res) {
  const genres = await db.getAllCategories();
  const genreRows = await db.getBooksMatchingGenre(req.query.genre);

  res.render("viewCategoryPage", {
    genres: genres,
    searchedGenre: req.query.genre,
    genreRows: genreRows,
  });
}

module.exports = {
  categoriesRouterGet,
};
