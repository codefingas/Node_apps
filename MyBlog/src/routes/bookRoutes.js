var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function(nav){
	//Creating Books
var books = [
		{
			title: "War and Peace",
			genre: 'Historical Fiction',
			author: 'Lev Nikolayevich Tolstoy',
			read: false
		},
		{
			title: "Love and War",
			genre: 'Romance Fiction',
			author: 'Lev suck Tolstoy',
			read: false
		},
		{
			title: "Karate and Chinese",
			genre: 'Fighting Fiction',
			author: 'ryu Tolstoy',
			read: false
		},
		{
			title: "s and Peace",
			genre: 'good Fiction',
			author: 'james Nikolayevich',
			read: false
		},
		{
			title: "Bake and cook",
			genre: 'Historical Fiction',
			author: 'Ryu Mary',
			read: false
		},
		{
			title: "Run and Hide",
			genre: 'Love Fiction',
			author: 'Mary Tolstoy',
			read: false
		}
];

// creating the routing for books
bookRouter.route("/")
	.get(function(req, res){
		var id = req.params.id;
		 var url = 'mongodb://localhost:27017/libaryApp';
	 		mongodb.connect(url, function(err, db) {
	 			var collection = db.collections('books');
	 		})
				res.render("bookListView", {
						title: 'Books',
						 nav: nav,
						books : books
					})
			});
bookRouter.route("/:id")
	.get(function(req, res){
		var id = req.params.id;
		res.render('bookView', {
						title: books[id].title,
						 nav: nav,
						books : books[id]
					})
		
	});

	return bookRouter;
 }


module.exports = router;