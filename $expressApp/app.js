//===Activation express
var express = require('express');
var app = express();

app.use("/assets", express.static('assets'));
//====rendering the index.html as a static file===
app.use(express.static('src/views'));


//=====Routing the app====
app.get("/", function(req, res){
	res.send("Hello World");
});

app.get("/books", function(req, res){
	res.send("Hello books");
});


//===Serving the app a port
app.listen(5000, function(err){
	console.log(`s#rv#r 5000 on`);
});