var http = require("http");
var express = require("express");
var app = express();
var server;

server = app.get("/", function(req, res){
	res.sendFile(`${__dirname}/index.html`);
})

server.listen(3000, "127.0.0.1");
console.log("s3rv3r on ; port 3000");