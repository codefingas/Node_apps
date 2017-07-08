/*jslint node: true*/
var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var router = function (nav) {
	'use strict';
	/*==requiring the book controller==*/
	var bookController = require('../controllers/bookController')(null, nav);
	/*==End of requiring the bookController==*/
	
	//====securing the whole book routes===
	bookRouter.use(bookController.middleware);
	//=====End of securing the whole book routes===
// creating the routing for books
	bookRouter.route("/")
		.get(bookController.getIndex);

	bookRouter.route("/:id")
		.get(bookController.getById);

	return bookRouter;
};


module.exports = router;