var express = require('express');
var bodyParser = require('body-parser');

//var config=require('./config/default.js');
console.log("env " + process.env.NODE_ENV);
var _ = require("lodash");
var config = require("./config/" + (process.env.NODE_ENV || "production") + ".js");
console.log("port " +config.server.port);
module.exports = _.merge({}, config);


var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(config.server.port);
var userrouting = require('./routing/userrouting');
app.use('/users', userrouting);