//====instructions for Jslint===
/*jslint node: true*/
//===End of instructions for jsLint==


var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function (bookService, nav) {
	'use strict';
	var getIndex, getById, middleware, bookServices;
	
	middleware = function (req, res, next) {
	   //if (!req.user) {
			//res.redirect("/auth/register");
		//}
		next();
	};
	
	getIndex = function (req, res) {
		var url = 'mongodb://localhost:27017/libaryApp';
		mongodb.connect(url, function (err, db) {
	 			var collection = db.collection('books');
	 			collection.find({}).toArray(
	 				function(err, results){
		 					res.render("bookListView", {
							title: 'Books',
							 nav: nav,
							books : results
						})
	 				   }
	 				)
	 			})
				
			};
	
	getById = function(req, res){
	 bookServices = require('../services/goodreadsServices')();
		var id = new objectId(req.params.id);
        var url = 'mongodb://localhost:27017/libaryApp';
		mongodb.connect(url, function(err, db) {
		var collection = db.collection('books');
		collection.findOne({_id: id},
				function(err, results){
				bookServices.getById(results.bookId, function (err, book) {
					results.book = book;
						res.render("bookView", {
						title: 'Books',
						 nav: nav,
						book : results
					});
				});
			});
		})
	};
	
	return {
		getIndex: getIndex,
		getById: getById,
		middleware: middleware
	};
};

module.exports = bookController;