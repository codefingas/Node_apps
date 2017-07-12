/*jslint node: true*/
var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
	{
		title: 'War and Peace',
		genre: 'Historical Fiction',
		author: 'Lev Nikolayevich Tolstoy',
		bookId: 656,
		read: false
	},
	{
		title: 'Les Miserables',
		genre: 'Historical Fiction',
		author: 'Lev Nikolayevich Tolstoy',
		bookId: 24280,
		read: false
	},
	{
		title: 'The time Machine',
		genre: 'Science Fiction',
		author: 'H.G Wells',
		bookId: 2493,
		read: false
	},
	{
		title: 'Les Miserables',
		genre: 'Historical Fiction',
		author: 'Lev Nikolayevich Tolstoy',
		bookId: 24280,
		read: false
	},
	{
		title: 'The time Machine',
		genre: 'Science Fiction',
		author: 'H.G Wells',
		bookId: 2493,
		read: false
	},
	{
		title: 'Les Miserables',
		genre: 'Historical Fiction',
		author: 'Lev Nikolayevich Tolstoy',
		bookId: 24280,
		read: false
	},
	{
		title: 'The time Machine',
		genre: 'Science Fiction',
		author: 'H.G Wells',
		bookId: 2493,
		read: false
	}
];

var router = function (nav) {
	'use strict';
	adminRouter.route('/addBooks')
	    .get(function (req, res) {
		    var url = 'mongodb://localhost:27017/libaryApp';
		    mongodb.connect(url, function (err, db) {
				var collection = db.collection('books');
				collection.insertMany(books,
						function (err, results) {
					    res.send(results);
				    });
			});
	    });
	return adminRouter;
};
module.exports = router;