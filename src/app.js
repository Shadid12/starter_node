const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { mongoUrl } = require('./config');
const bodyParser = require('body-parser');

//routes 
const authorsRoutes = require('./api/routes/authors');
const booksRoutes = require('./api/routes/books');

mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});

app.use('/authors', authorsRoutes);
app.use('/books', booksRoutes);

module.exports = app;