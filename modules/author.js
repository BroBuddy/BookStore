var mongoose = require('mongoose');

// Author schema
var authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    hometown: {
        type: String
    },
    date_of_birth: {
        type: String
    },
    place_of_birth: {
        type: String
    },
    education: {
        type: String
    },
    image_url: {
        type: String
    },
    web_url: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Author = module.exports = mongoose.model('Author', authorSchema);

// Get authors
module.exports.getAuthors = function(callback, limit) {
    Author.find(callback).limit(limit);
};

// Get author
module.exports.getAuthorById = function(id, callback) {
    Author.findById(id, callback);
};

// Add author
module.exports.addAuthor = function(author, callback) {
    Author.create(author, callback);
};

// Update author
module.exports.updateAuthor = function(id, author, options, callback) {
    var query = {
        _id: id
    };
    var update = {
        name: author.name,
        description: author.description,
        hometown: author.hometown,
        date_of_birth: author.date_of_birth,
        place_of_birth: author.place_of_birth,
        image_url: author.image_url,
        web_url: author.web_url,
        education: author.education
    };

    Author.findOneAndUpdate(query, update, options, callback);
};

// Delete author
module.exports.removeAuthor = function(id, callback) {
    var query = {
        _id: id
    };

    Author.remove(query, callback);
};