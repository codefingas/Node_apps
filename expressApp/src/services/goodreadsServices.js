/*jslint node: true*/
module.exports = function () {
	
	var getById = function (id, cb) {
			'use strict';
		    cb(null, {description: "our description goes here"});
	    };
	/*==using reveal module pattern to controll the export of the function==*/
	return {
		getById: getById
	};
	/*==using reveal module pattern to controll the export of the function==*/
};