const mongoose = require('mongoose');
const { Schema } = mongoose;

// Sub Document Schema, Author Schema
const Author = new Schema({
    name: String,
    email: String
});

// Sub Document Schema, Book Schema
const Book = new Schema({
    title: String,
    authors: [Author],
    publishedDate: Date,
    price: Number,
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Convert Schema to Model, Export!
module.exports = mongoose.model('Book', Book);