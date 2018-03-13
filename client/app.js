var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'BooksController',
        templateUrl: 'views/books/books.html'
    })
    .when('/books', {
        controller: 'BooksController',
        templateUrl: 'views/books/books.html'
    })
    .when('/books/details/:id', {
        controller: 'BooksController',
        templateUrl: 'views/books/details.html'
    })
    .when('/books/add', {
        controller: 'BooksController',
        templateUrl: 'views/books/add.html'
    })
    .when('/books/edit/:id', {
        controller: 'BooksController',
        templateUrl: 'views/books/edit.html'
    })
    .when('/genres', {
        controller: 'GenresController',
        templateUrl: 'views/genres.html'
    })
    .when('/authors', {
        controller: 'AuthorsController',
        templateUrl: 'views/authors/authors.html'
    })
    .when('/authors/details/:id', {
        controller: 'AuthorsController',
        templateUrl: 'views/authors/details.html'
    })
    .when('/authors/add', {
        controller: 'AuthorsController',
        templateUrl: 'views/authors/add.html'
    })
    .when('/authors/edit/:id', {
        controller: 'AuthorsController',
        templateUrl: 'views/authors/edit.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});