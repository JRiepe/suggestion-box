var app = angular.module('SuggestionBoxApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
  	.when('/post', { 
      controller: 'PostController', 
      templateUrl: 'views/post.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    });
});