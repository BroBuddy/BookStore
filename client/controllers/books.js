var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('BooksController');

    $scope.getGenres = function () {
        $http.get('/api/genres')
        .then(function(response) {
            $scope.genres = response.data;
        });
    };
    
    $scope.getBooks = function () {
        $http.get('/api/books')
        .then(function(response) {
            $scope.books = response.data;
        });
    };

    $scope.getBook = function () {
        var id = $routeParams.id;

        $http.get('/api/books/' + id)
        .then(function(response) {
            $scope.book = response.data;
        });
    };

    $scope.addBook = function () {
        $http.post('/api/books/', $scope.book)
        .then(function() {
            $scope.created = true;
        });
    };

    $scope.updateBook = function () {
        var id = $routeParams.id;

        $http.put('/api/books/' + id, $scope.book)
        .then(function() {
            window.location.href = '#/books';
        });
    };

    $scope.removeBook = function (id) {
        $http.delete('/api/books/' + id)
        .then(function() {
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();

            window.location.href = '#/books';
        });
    };
}]);