const { Router } = require("express");
const searchRouter = Router();

const { searchPageGet } = require("../controllers/searchController");

searchRouter.get("/", searchPageGet);

module.exports = searchRouter;
