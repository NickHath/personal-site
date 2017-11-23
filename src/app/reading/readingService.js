angular.module('personalSite').service('readingService', function($http){
  this.getReadings = function() {
    return $http.get('/api/readings');
  }
})