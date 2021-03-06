var myApp = angular.module('myApp');

myApp.controller('GenresController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('GenresController');
    
    $scope.getGenres = function () {
        $http.get('/api/genres')
        .then(function(response) {
            $scope.genres = response.data;
        });
    };

    $scope.addGenre = function () {
        $http.post('/api/genres/', $scope.genre)
        .then(function() {
            $scope.getGenres();
        });
    };

    $scope.updateGenre = function () {
        var id = $routeParams.id;

        $http.put('/api/genres/' + id, $scope.genre)
        .then(function() {
            $scope.getGenres();
        });
    };

    $scope.removeGenre = function (id) {
        $http.delete('/api/genres/' + id)
        .then(function() {
            $scope.getGenres();
        });
    };
}]);