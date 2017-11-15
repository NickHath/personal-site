angular.module('personalSite').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('projects', {
      url: '/',
      templateUrl: 'app/projects/projectsView.html',
      controller: 'projectsController'
    }).state('about', {
      url: '/about',
      templateUrl: 'app/about/aboutView.html'
    }).state('blog', {
      url: '/blog',
      templateUrl: 'app/blog/blogView.html',
      controller: 'blogController'
    }).state('reading', {
      url: '/reading',
      templateUrl: 'app/reading/readingView.html',
      controller: 'app/readingController'
    }).state('contact', {
      url: '/contact', 
      templateUrl: 'app/contact/contactView.html'
    })
  $urlRouterProvider.otherwise('/')
})