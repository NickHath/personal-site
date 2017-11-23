angular.module('personalSite').controller('readingController', function($scope, readingService) {
  readingService.getReadings().then(readings => {
    $scope.readings = readings.data.list;
    $scope.readings = Object.values($scope.readings);
    console.log(Object.values($scope.readings));
  });
})