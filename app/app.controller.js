var supplyhub = angular.module('supplyhub', []);

supplyhub.controller('MainController', ['$scope', '$http', function($scope, $http) {
  var url = "http://api.vip.supplyhub.com:19000/products";
  $scope.searchTerm = '';
  $scope.results = '';


  $scope.getResults = function(searchTerm) {
    $http.get(url + '?search=' + searchTerm)
      .success(function(data) {
        console.log(data)
        $scope.results = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };



}]);
