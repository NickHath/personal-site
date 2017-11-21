angular.module('personalSite').controller('blogController', function($scope, blogService) {
  $scope.posts = blogService.getPosts();
})