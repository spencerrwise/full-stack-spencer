var app = angular.module("fullStackApp");

app.factory('mainService', function($http, $q){

return{
		getFamily: function(){
			return $http({
				method: "GET",
				url: "http://localhost:3000/family"
			})
		},
		getFriends: function(){
			return $http({
				method: "GET",
				url: "http://localhost:3000/friends"
			})
		},
		getActivities: function(){
			return $http({
				method:"GET",
				url:"http://localhost:3000/activities"
			})
		},
		getPersonalInformation: function(){
			return $http({
				method:"GET",
				url:"http://localhost:3000/me"
			})
		}
	};
});