var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


var router = function (nav) {
	'use strict';
	adminRouter.route('/addBooks')
	    .get(function(req, res){
	    	var url = 'mongodb://localhost:27017/libaryApp';
	 		mongodb.connect(url, function(err, db) {
	 			var collection = db.collection('books');
	 			collection.insertMany(books,
	 				function(err, results){
		 				res.send(results);
	 				   }
	 				)
	 			})
	    });
		return adminRouter;
	}
module.exports = router;