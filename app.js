const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

const addBookRouter = require("./routes/addBookRouter");
app.use("/add", addBookRouter);

const categoriesRouter = require("./routes/categoriesRouter");
app.use("/categories", categoriesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
