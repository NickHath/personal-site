angular.module('personalSite').controller('projectsController', function($scope, projectsService) {
  $scope.projects = projectsService.getProjects();
})