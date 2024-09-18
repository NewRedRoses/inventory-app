const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = 3000;

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

const BookRouter = require("./routes/BookRouter");
app.use("/book", BookRouter);

const categoriesRouter = require("./routes/categoriesRouter");
app.use("/categories", categoriesRouter);

const searchRouter = require("./routes/searchRouter");
app.use("/search", searchRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
