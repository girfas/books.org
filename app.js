angular.module('DemoApp',[])
.factory('personService', function(){

	var person = {}

	person.printName  = function(firstName, lastName){

		return firstName + ' ' + lastName;
	}

	return person;


})

.controller('myController', function($scope, personService){


	$scope.firstName = 'Trainee';
	$scope.lastName = 'Russo';


	$scope.printName = personService.printName($scope.firstName, $scope.lastName);

});