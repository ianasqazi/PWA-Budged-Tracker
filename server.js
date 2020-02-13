const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// const PORT = 3000;
const PORT = process.env.PORT || 3000;



const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// mongoose.connect('mongodb://pwa:pwapwa1@dds217350.mlab.com:17350/heroku_0w2zzvw1', 
// mongodb://<dbuser>:<dbpassword>@ds217350.mlab.com:17350/heroku_0w2zzvw1

mongoose.connect("mongodb://pwa:pwapwa1@dds217350.mlab.com:17350/heroku_0w2zzvw1", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});