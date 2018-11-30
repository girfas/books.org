angular.module('DemoApp',['ngRoute'])
.config(['$routeProvider', function(){
	$routeProvider.when('/about'.{
		templateUrl:'Views/about.html'
	})
	.when('/contact', {
		templateUrl:'Views'
	})
	.otherwise({templateUrl:'Views/404.html'})

}])

.factory('personService', function(){

	var person = {}

	person.printName  = function(firstName, lastName){

		return firstName + ' ' + lastName;
	}

	return person;


})

