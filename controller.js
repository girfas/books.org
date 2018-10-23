angular.module('DemoApp')
.controller('myController', function($scope, personService){


	$scope.firstName = 'Trainee';
	$scope.lastName = 'Russo';


	$scope.printName = personService.printName($scope.firstName, $scope.lastName);

});