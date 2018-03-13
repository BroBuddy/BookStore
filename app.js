var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

Genre = require('./modules/genre');
Book = require('./modules/book');
Author = require('./modules/author');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('Please use the /api. Thank you very much.');
});

// Login
app.post('/api/login', function (req, res) {
    var user = {
        id: 1,
        name: 'Buddy',
        email: 'sirstone@gmx.de'
    }

    jwt.sign({ user: user }, 'secretkey', { expiresIn: '1h' }, function (err, token) {
        res.json({
            token: token
        });
    });
});

app.post('/api/test', verifyToken, function (req, res) {
    jwt.verify(req.token, 'secretkey', function (err, authData) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'NICE DUDE',
                authData: authData
            });           
        }
    });
});

// Genre
app.get('/api/genres', function (req, res) {
    Genre.getGenres(function(err, genres) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(genres);
    });
});

app.post('/api/genres', function (req, res) {
    Genre.addGenre(req.body, function(err, genre) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(genre);
    });
});

app.put('/api/genres/:_id', function (req, res) {
    Genre.updateGenre(req.params._id, req.body, {}, function(err, genre) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(genre);
    });
});

app.delete('/api/genres/:_id', function (req, res) {
    Genre.removeGenre(req.params._id, function(err, genre) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(genre);
    });
});

// Book
app.get('/api/books', function (req, res) {
    Book.getBooks(function(err, books) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(books);
    });
});

app.get('/api/books/:_id', function (req, res) {
    Book.getBookById(req.params._id, function(err, book) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(book);
    });
});

app.post('/api/books', function (req, res) {
    Book.addBook(req.body, function(err, book) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(book);
    });
});

app.put('/api/books/:_id', function (req, res) {
    Book.updateBook(req.params._id, req.body, {}, function(err, book) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(book);
    });
});

app.delete('/api/books/:_id', function (req, res) {
    Book.removeBook(req.params._idid, function(err, book) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(book);
    });
});

// Author
app.get('/api/authors', function (req, res) {
    Author.getAuthors(function(err, authors) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(authors);
    });
});

app.get('/api/authors/:_id', function (req, res) {
    Author.getAuthorById(req.params._id, function(err, author) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(author);
    });
});

app.post('/api/authors', function (req, res) {
    Author.addAuthor(req.body, function(err, author) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(author);
    });
});

app.put('/api/authors/:_id', function (req, res) {
    Author.updateAuthor(req.params._id, req.body, {}, function(err, author) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(author);
    });
});

app.delete('/api/authors/:_id', function (req, res) {
    Author.removeAuthor(req.params._id, function(err, author) {
        if (err) {
            res.sendStatus(404);
        }

        res.json(author);
    });
});

function verifyToken(req, res, next) {
    var bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(' ');

        var bearerToken = bearer[1];

        req.token = bearerToken;

        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(3000);
console.log('Running on port 3000.');