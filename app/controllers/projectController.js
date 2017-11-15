angular.module('personalSite').controller('projectController', function($scope, projectService) {
  $scope.projects = projectService.getProjects();
  $scope.test = 'It works!';
})