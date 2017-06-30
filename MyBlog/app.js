//===Activating express
var express = require('express');
var app = express();


var nav = [{
            Link:"/books",
		    Text: "Book"
		}, {
			Link: "/Authors",
			Text: 'Author'
		}]

var bookRouter = require("./src/routes/bookRoutes")(nav);
var adminRouter = require("./src/routes/adminRoutes")(nav);

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

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
						title: 'Books',
						 nav: nav
					});

});

var port = process.env.PORT || 5000;
//===Serving the app a port
app.listen(port, function(err){
	console.log(`port ${port} s#rv#r on`);
});

