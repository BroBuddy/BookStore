var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Book schema
var schema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    image_url: {
        type: String
    },
    buy_url: {
        type: String
    },
    price: {
        type: String,
        default: '0.00'
    },
    rating: {
        type: Number,
        default: 0
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', schema);

// Get books
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
};

// Get book
module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
};

// Add book
module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
};

// Update book
module.exports.updateBook = function(id, book, options, callback) {
    var query = {
        _id: id
    };
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        image_url: book.image_url,
        buy_url: book.buy_url,
        price: book.price,
        rating: book.rating
    };

    Book.findOneAndUpdate(query, update, options, callback);
};

// Delete book
module.exports.removeBook = function(id, callback) {
    var query = {
        _id: id
    };

    Book.remove(query, callback);
};