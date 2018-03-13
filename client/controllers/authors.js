var myApp = angular.module('myApp');

myApp.controller('AuthorsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('AuthorsController');
    
    $scope.getAuthors = function () {
        $http.get('/api/authors')
        .then(function(response) {
            $scope.authors = response.data;
        });
    };

    $scope.getAuthor = function () {
        var id = $routeParams.id;

        $http.get('/api/authors/' + id)
        .then(function(response) {
            $scope.author = response.data;
        });
    };

    $scope.addAuthor = function () {
        $http.post('/api/authors/', $scope.author)
        .then(function() {
            $scope.created = true;
        });
    };

    $scope.updateAuthor = function () {
        var id = $routeParams.id;

        $http.put('/api/authors/' + id, $scope.author)
        .then(function() {
            window.location.href = '#/authors';
        });
    };

    $scope.removeAuthor = function (id) {
        $http.delete('/api/authors/' + id)
        .then(function() {
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();

            window.location.href = '#/authors';
        });
    };
}]);