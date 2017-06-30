//===Activating express
var express = require('express');
var app = express();
var sql = require('mssql');

var config ={
	user: "books",
	password: 'pluralsight1@',
	server: "gpnju6fwr2.database.windows.net",
	database: 'Books',

	options: {
		encrypt: true
	}
};

sql.connect(config, function(err){
	console.log(err);
})

var nav = [{
            Link:"/books",
		    Text: "Book"
		}, {
			Link: "/Authors",
			Text: 'Author'
		}]

var bookRouter = require("./src/routes/bookRoutes")(nav);

app.use('/Books', bookRouter);

// end of Routing for books

app.use("/assets", express.static('assets'));
app.use(express.static("./src/views"))
//====rendering the index as a static file===
app.set("views", "./src/views");
//====using ejs as the view engine====
app.set('view engine', 'ejs');







//=====Routing the app====
app.get("/", function(req, res){
	res.render("index", {
						title: 'StoryStrap',
						 nav: [{
						 	Link:"/books",
						    Text: "Books"
						}, {
							Link: "/Authors",
							Text: 'Authors'
						}]
					})
				});

app.get("/books", function(req, res){
	res.send("Hello books");
});

var port = process.env.PORT || 5000;
//===Serving the app a port
app.listen(port, function(err){
	console.log(`port ${port} s#rv#r on`);
});

