/*=== jslint node: true ===*/
var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');

var nav = [{
			Link: "/",
		   Text: "MyBlog"},
		   {
            Link:"/books",
		    Text: "Book"
		}, {
			Link: "/Authors",
			Text: 'Author'
		}];

var router = function () {
	//=====Routing the sign up====
	authRouter.route('/signUp')
		.post(function (req, res) {
			console.log(`request from signup ${req.body}`);
			var url = 'mongodb://localhost:27017/libaryApp';
	 		mongodb.connect(url, function(err, db) {
 			var collection = db.collection('users');
 			var user = {
 				username: req.body.userName,
 				email: req.body.Email,
 				password: req.body.password
 			};
 			collection.insert(user,
 			 function (err, results) {
				req.login(results.ops[0], function(){
					res.redirect('/auth/profile');
				});
 			 })
 		});
	});

	//===routing the sign in===
	authRouter.route('/signIn')
		//====securing the routes===
		.all( function(req, res, next) {
			if(!req.user) {
				res.redirect("/auth/register")
			}
			next();
		})
		//====End of securing the routes===
		.post(passport.authenticate('local', {
			failureRedirect: "/"
		}), function(req, res){
			res.redirect('/auth/profile');
		});

		//====Routing the profile====
		authRouter.route('/profile')
		    .get(function(req, res){
		    	res.json(req.user);
		    });
	//===Routing the false login====
	authRouter.route("/register")
		.get(function (req, res) {
		res.render('register', {
			title: 'Books',
			nav: nav,
			
		});
	})
		return authRouter;
};

module.exports = router;