var supplyhub = angular.module('supplyhub', ["ngTable", 'ui.bootstrap']);

supplyhub.controller('MainController', ['$scope', '$http', 'ngTableParams', function($scope, $http, ngTableParams) {
  var url = "http://api.vip.supplyhub.com:19000/products";
  $scope.searchTerm = '';
  $scope.results = '';
  $scope.filteredResults = '';
  $scope.lastSearchTerm = '';
  $scope.currentPage = 1;
  $scope.numPerPage = 10;
  $scope.maxSize = 5;

  $scope.getResults = function(searchTerm) {
    $http.get(url + '?search=' + searchTerm)
      .success(function(data) {
        console.log(data)
        $scope.results = data;
        $scope.filteredResults = $scope.results.slice(0, 10);
        $scope.lastSearchTerm = searchTerm;
        if (data[0].product === undefined) {
          alert('Sorry, 0 results were found. Please try again!')
        }
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.tableParams = new ngTableParams({}, {
    dataset: $scope.results
  });


  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
      end = begin + $scope.numPerPage;

    $scope.filteredResults = $scope.results.slice(begin, end);
  });

}]);
