// modules =================================================

var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var jsonfile = require('jsonfile');
// configuration ===========================================

// set our port
var port = process.env.PORT || 8080;

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/libs'));


 
//var registerController=require('./public/register-controller');
//var userListController=require('./public/userlist-controller');
 

 /* app.get('/',function(req,res){
	res.send("Hi Murugesh");
});

*/    

app.get('/test',function(req,res){
var jsonfile = require('jsonfile')
 
var file = 'test.json'
var obj = {"light": "off"}
 
jsonfile.writeFile(file, obj, {spaces: 2, EOL: '\r\n'}, function(err) {
  console.error(err)
})

});


app.get('/onLight',function(req,res){
var jsonfile = require('jsonfile')
 
var file = './public//test.json'
var obj = {"light": "on#"}
 
jsonfile.writeFile(file, obj, {spaces: 2, EOL: '\n'}, function(err) {
  console.error(err)
})

});



app.get('/offLight',function(req,res){
var jsonfile = require('jsonfile')
 
var file = './public//test.json'
var obj = {"light": "off#"}
 
jsonfile.writeFile(file, obj, {spaces: 2, EOL: '\n'}, function(err) {
  console.error(err)
})

});
 

// app.post('/register',registerController.register);
// app.get('/getData',userListController.userList);


// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('App running on port ' + port);

// expose app
exports = module.exports = app;












