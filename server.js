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
// mongodb://<dbuser>:<dbpassword>@ds219308.mlab.com:19308/heroku_9738h7dp

// mongoose.connect("mongodb://pwa:pwapwa1@dds217350.mlab.com:17350/heroku_0w2zzvw1", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//     useUnifiedTopology: true
// });

mongoose.connect('mongodb://username:password1@dds217350.mlab.com:17350/heroku_0w2zzvw1', {

  useNewUrlParser: true,
  useFindAndModify: false
});

// mongoose.connect('mongodb://pwa:pwapwa1@dds217350.mlab.com:17350/heroku_0w2zzvw1', function(err, db) {
//     if (err) {
//         console.log('Unable to connect to the server. Please start the server. Error:', err);
//     } else {
//         console.log('Connected to Server successfully!');
//     }
// });

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});