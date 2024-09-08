const { Router } = require("express");
const { categoriesRouterGet } = require("../controllers/categoriesController");
const categoriesRouter = Router();

categoriesRouter.get("/", categoriesRouterGet);

module.exports = categoriesRouter;
