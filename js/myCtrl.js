var app = angular.module("fullStackApp");
app.controller("mainCtrl", function($scope, mainService){

$scope.getFamily= function(){
	mainService.getFamily().then(function(data){
		$scope.family = data.data;
	})
}

$scope.getFriends=function(){
	mainService.getFriends().then(function(data){
		$scope.friends = data.data;
	})
}

$scope.getActivities = function(){
	mainService.getActivities().then(function(data){
		$scope.activities = data.data;
	})
}

$scope.getPersonalInformation = function(){
	mainService.getPersonalInformation().then(function(data){
		$scope.personalInformation = data.data;
	})
}

//input fields for addFriend

$scope.addFriend = function(){
	mainService.addFriend($scope.friendForm);

	mainService.getFriends().then(function(response) {
		$scope.friendForm = response.data;

	});
	$scope.friendForm.name = '';
	$scope.friendForm.age = '';
	$scope.friendForm.yearMet='';
  };
});