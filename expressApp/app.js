//===Activating express
var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');


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
var authRouter = require("./src/routes/authRoutes")(nav);

//====Moiddleware======
app.use("/assets", express.static('assets'));
app.use(express.static("./src/views"));

//====setting the the body parser for the body..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret: 'libary', resave: true, saveUninitialized: true}));
require("./src/config/passport")(app);

//====rendering the index as a static file===
app.set("views", "./src/views");
//====using ejs as the view engine====
app.set('view engine', 'ejs');

//====routing the books====
app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);








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

