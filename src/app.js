const express = require('express');
const app = express();

//routes 
const authorsRoutes = require('./api/routes/authors');
const booksRoutes = require('./api/routes/books');

app.use('/authors', authorsRoutes);
app.use('/books', booksRoutes);

module.exports = app;