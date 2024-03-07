const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true, // these are just some options that need to be passed in
  useUnifiedTopology: true,
}); // this will connect to the blog database

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false })); // this will allow us to access the data from the form in the request object
app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test Description",
    },
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test Description",
    },
  ];
  res.render("articles/index", { articles: articles }); // this will render the index.ejs file and pass the articles array to it
});

app.use("/articles", articleRouter); // this will use the articleRouter for any route that starts with /articles

app.listen(5000);
