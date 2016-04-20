var myApp = angular.module('myApp', ['ngResource']);

myApp.controller('demoController', ['$scope', '$resource', function($scope, $resource) {

    var Meetup = $resource('/api/meetups');

    Meetup.query(function(results){
    	$scope.lists = results;
    });


  //   { 'get':    {method:'GET'}, 
  // 'save':   {method:'POST'}, 
  // 'query':  {method:'GET', isArray:true}, 
  // 'remove': {method:'DELETE'}, 
  // 'delete': {method:'DELETE'} }; 

    $scope.lists = [];


    $scope.demoSubmit = function() {

        var meetup = new Meetup();
        meetup.name = $scope.demoName;
        meetup.$save(function (result){
        	$scope.lists.push(result);
        });

    }

}]);
