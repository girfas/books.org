angular.module('DemoApp',[])
.factory('personService', function(){

	var person = {}

	person.printName  = function(firstName, lastName){

		return firstName + ' ' + lastName;
	}

	return person;


})

