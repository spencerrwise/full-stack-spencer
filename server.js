// Just like last class, create a very simple express server and test that it's working by sending back 'Hello World' whenever someone hits the index (/) of your app.
// Now, just like you can require other modules (http, express, body-parser), go ahead and require the server-assets module that is holding all your data. You do this by 'var myData = require('./server-assets/myData.js');'. Although you can just copy that line, really note what's going on and why the syntax is that way.
// Now, note that you're able to access all of the methods that you put on 'module.exports' to get your data.
// Now, create an API that allows you to GET and POST *ALL the data (besides your personal Object) from your server-assets data page. An example is below.

var myData = require('./server-assests/myData.js');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next){
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Method','OPTIONS, GET, POST');
res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
next()
});

app.get('/', function(req, res){
	res.send('Hello World!');

});

app.get('/family', function(req, res){
	res.send(myData.getFamily());
});

app.post('/family', function(req, res){
	myData.addFamilyMember({name: req.body.name, age: req.body.age, relationship: req.body.relationship});
	var data = myData.getFamily();
	res.send(data);
});

app.get('/friends', function(req, res){
	res.send(myData.getFriends());
});

app.post('/friends', function(req, res){
	myData.addFriend({name: req.body.name, age: req.body.age, yearMet: req.body.yearMet});
	var data = myData.getFriends();
	res.send(data);
});

app.get('/activities', function(req, res){
	res.send(myData.getActivities());
});

app.post('/activities', function(req, res){
	myData.addActivity({name: req.body.name});
	var data = myData.getActivities();
	res.send(data);
});

app.get('/me', function(req, res){
	res.send(myData.getMeData());
});

app.listen(3000);