var app, express;

express = require("express");
app = express();
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", function(req, res){
	res.sendFile(`${__dirname}/index.html`)
});

app.get("/login", function(req, res){
	app.render("admin");
});


app.listen(10, '127.0.0.1');
console.log("S3RV3R o#: 10")