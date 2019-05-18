
/*
====================
Modules
====================
*/
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');


/*
====================
Config
====================
*/
var port = process.env.PORT || 8080;
var db = require('./config/db');
mongoose.connect(db.url, {useNewUrlParser: true});

// Parse application/json
app.use(bodyParser.json());

// Parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// Static path set to public
app.use(express.static(__dirname + '/public'));

/*
====================
Routes
====================
*/
require('./app/routes')(app); // configure our routes

/*
====================
Startup
====================
*/
app.listen(port);
console.log('Server open on ' + port);

// Expose Application
exports = module.exports = app;
