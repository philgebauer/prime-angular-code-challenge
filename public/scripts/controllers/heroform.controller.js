// var myApp = angular.module('myApp', []);

app.controller("HeroformController", ["$http", function($http) {
  console.log('HeroformController running');
}]);



  var self = this;
	self.heroArray = [];
  self.newHero = {};

  getHeroes();

  // add a new employee
  self.addHero = function() {
    $http.post('/heroes', self.newEmployee)
      .then(function(response) {
        // cool
        console.log('response: ', response.data);
        // make GET request for employee data
        self.newHero = {};
        getHeroes();
      },
      function(response) {
        // error
        console.log('ERROR response: ', response.data);
      });
  }

  function getHeroes() {
    $http.get('/heroes')
      .then(function(response) {
        console.log(response.data);
        self.heroArray = response.data;

      });
  }
