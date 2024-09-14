function searchPageGet(req, res) {
  res.render("searchPage", { searched_query: req.query.search_query });
}

module.exports = {
  searchPageGet,
};
