const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    books: { type: Object, required: false }
});

module.exports = mongoose.model('Author', authorSchema);