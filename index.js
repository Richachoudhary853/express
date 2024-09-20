const express = require("express");
const app = express();

app.get('/', function(req,res){ //request,response
    res.send("Hi There");
}) 

app.get('/home', function(req,res){ //request,response
    res.send("Hi There from home block");
}) 

app.get('/contact', function(req,res){ //request,response
    res.send("Hi There from Contact Block");
}) 

app.get('/BCET', function(req,res){ //request,response
    res.send("Hi There from BCET");
}) 

app.listen(3001);