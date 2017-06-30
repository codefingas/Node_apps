var express = require('express');
var bookRouter = express.Router();
var sgl = require('mssql');


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
		var request = new sql.Request();

		request.query("select * from books",
		 function(err, recordset){
				console.log(recordset);
				res.render("bookListView", {
						title: 'Books',
						 nav: nav,
						books : recordset
					})
			})

	});
bookRouter.route("/:id")
.all(function(req, res, next){
	var id = req.params.id;
		var ps = new sql.PreparedStatement();
		ps.input('id', sql.Int)
		ps.prepare('select * from books where id = @id', 
			function(err){
				ps.execute({id:req.params.id},
				function(err, recordset){
					if(recordset.length === 0){
						res.status(404).send('Not Found');
					}else{
					req.book = recordset[0];
					next();
					}
					});
				});
			})


	.get(function(req, res){
		res.render('bookView', {
			title: "Books",
			nav: nav,
			book: req.book
		});
		
	});

	return bookRouter;
 }


module.exports = router;