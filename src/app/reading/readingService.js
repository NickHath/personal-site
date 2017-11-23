angular.module('personalSite').service('readingService', function($http){
  this.getReadings = function() {
    return $http.get('http://localhost:4500/api/readings');
  }
})