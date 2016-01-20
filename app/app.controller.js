var supplyhub = angular.module('supplyhub', ["ngTable"]);

supplyhub.controller('MainController', ['$scope', '$http', 'ngTableParams', function($scope, $http, ngTableParams) {
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

  $scope.tableParams = new ngTableParams({}, {
    dataset: $scope.results
  });

}]);
