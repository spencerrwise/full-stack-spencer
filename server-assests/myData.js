// Add a file to your server-assets called myData.js
// Fill that file up with the following 'private' information.
// An array of objects that has each member in your family, their name, age, and relationship to you.
// An array of objects that has some of your closest friends, their name, age, and when you met them.
// An array of your favorite activities to do.
// An object that has your name, height, age, favorite movie, favorite artist, and favorite food.
// Now that we have our data...

// Now make getter and setter methods to be able to access each piece of Data in your file and be sure to put these getter and setter methods on 'module.exports' in order to be able to access them later in server.js once you require this file.
// Note your 'me' object will only have a GETTER not a SETTER.



var family = [
	{
		name:"Alph", 
		age: 42, 
		relationship:"Brother"
	},
	{
		name:"Brig", 
		age: 39, 
		relationship:"Brother"
	},
	{
		name:"Josh", 
		age: 36, 
		relationship:"Brother"
	},
	{
		name:"Aaron", 
		age: 33, 
		relationship:"Brother"
	},
	{
		name:"KC", 
		age: 30, 
		relationship:"Sister"
	},
	{
		name:"Talmage", 
		age: 18, 
		relationship:"Brother"
	}
];

module.exports.getFamily = function() {
	return family;
};

module.exports.addFamilyMember = function(newMember){
	family.push(newMember);
};

var friends = [
	{
		name:"Rowan", 
		age: 23, 
		yearMet:1997
	},
	{
		name:"Alex", 
		age: 23, 
		yearMet:2005
	},
	{
		name:"David", 
		age: 23, 
		yearMet:2005
	},
	{
		name:"Andrew", 
		age: 23, 
		yearMet:2010
	}
];

module.exports.getFriends = function(){
	return friends;
};

module.exports.addFriend = function(newFriend){
	friends.push(newFriend);
};

var activities = [
	{
		name:"Programming"
	},
	{
		name:"Sleeping"
	},
	{
		name:"Eating"
	}

];

module.exports.getActivities = function(){
	return activities;
};

module.exports.addActivity = function(newActivity){
	activities.push(newActivity);
};

var me = {
	name: "Spencer",
	age: 22,
	height: "5-8",
	favoriteMovie: "Mulan",
	favoriteArtist: "Kids Bop",
	favoriteFood: "Burrito"
};

module.exports.getMeData = function(){
	return me;
};