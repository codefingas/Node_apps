var express = require('express');
var adminRouter = express.Router();
	//Creating Books


var router = function(nav){
	adminRouter.route('/addBooks')
	.get(function(req, res){
	
	 	console.log(db)
	 	var collection = db.collections("book");
	 	collection.insertMany(books,
	 	 function(err, results) {
	 	 	console.log(err);
	 	 	res.send(results);
	 	 	db.close();
	 	 });
	 });
			// res.send("inserting Books");

	return adminRouter;
};

module.exports = router; 