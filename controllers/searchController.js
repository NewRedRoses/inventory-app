const db = require("../db/queries");

async function searchPageGet(req, res) {
  const { search_query } = req.query;
  let listOfBooks;
  if (search_query) {
    listOfBooks = await db.getAllBooksWhere(search_query);
  }
  res.render("searchPage", {
    searched_query: search_query,
    listOfBooks: listOfBooks,
  });
}

module.exports = {
  searchPageGet,
};
