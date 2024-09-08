const db = require("../db/queries");

async function categoriesRouterGet(req, res) {
  const genres = await db.getAllCategories();
  res.render("viewCategory", { genres: genres });
}

module.exports = {
  categoriesRouterGet,
};
