angular.module('personalSite').controller('readingController', function($scope, readingService) {
  $scope.readings = '';
  readingService.getReadings().then(readings => {
    console.log(readings);
    $scope.readings = readings;
  })
})