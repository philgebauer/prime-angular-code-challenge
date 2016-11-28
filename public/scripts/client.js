var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/heroform', {
            templateUrl: '/views/templates/heroform.html',
            controller: 'HeroformController',
            controllerAs: 'heroform'
        })
        .when('/herolist', {
            templateUrl: '/views/templates/herolist.html',
            controller: 'HerolistController',
            controllerAs: 'herolist'
        })
        .otherwise({
            redirectTo: 'herolist'
        });
}]);
