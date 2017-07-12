/*jslint node: true*/
'use strict';
var http =  require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

module.exports = function () {
	
	/*Haven't implemented the getindex Yet would work on that later*/
	var getIndex = function (id, cb) {
		var options = {
			host: 'www.goodreads.com',
			path: '/book/show/'+id+"?format=xml&key=CAnaz9O6AUjlNh5RStpQ7A"
		};
		
		var callback = function (response) {
			var str = '';
			
			response.on('data', function(chunk){
				str += chunk;
			});
			response.on('end', function() {
				parser.parseString(str, 
				    function(err, result){
					cb(null, result.GoodreadsResponse.book);
				});
			});
		}
		http.request(options, callback).end();
	};
	
	var getById = function (id, cb) {
			var options = {
				host: 'www.goodreads.com',
			    path: '/book/show/'+id+"?format=xml&key=CAnaz9O6AUjlNh5RStpQ7A"
			};
			
		    var callback= function(response){
				var str = '';
				
				response.on('data', function(chunk){
					str += chunk;
				});
				response.on('end', function () {
					console.log(`${str} with love 'goodreads'`);
					parser.parseString(str, 
					     function (err, result) {
						cb(null, result.GoodreadsResponse.book);
					});
				});
			}
			http.request(options, callback).end();
	    };
	/*==using reveal module pattern to controll the export of the function==*/
	return {
		getById: getById,
		getIndex: getIndex
	};
	/*==using reveal module pattern to controll the export of the function==*/
};