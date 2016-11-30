var express = require('express');
var fs = require('fs');

module.exports = {

	//	Responds to GET request sent to /api route
	get: function (req, res) {

		res.send ("API says - This is a GET resource");
	},

	//	Responds to POST request send to /api route
	post: function (req, res) {

		res.send ("API says - This is a POST resource");
	},

	//	Responds to GET request sent to /matches
	getMatches: function (req, res) {

		/*
		*	Reads from the Sportdec supplied .json data file
		*	Usually I would store data in database (Mongo or MySQL), but "spoofing" data store
		*	for the moment to make it simpler for the user to run the app.
		*
		*	Ideally this method would return a list of latest matches,
		*	however this currently only returns 1 result
		*/
		fs.readFile('./app/data/sampleMatchesData.json', 'utf8', function (error, data) {

			if (!error) {

				var obj = JSON.parse(data);
				var matches = [];
				for (var i = 0; i < obj.latest_matches.length; i++) {

					var match = obj.latest_matches[i];
					matches.push (match);
				}

				//	Return array of matches
				res.send ({

		    		state: 'success',
		    		matches: matches,
		    	});
			} else {

				res.send ({

		    		state: 'fail',
		    		matches: null,
		    		message: error.message,
		    	});
			}
		});
	},

	//	Responds to GET request sent to /api/match/:id route
	getMatchWithId: function (req, res) {

		/*
		*	Reads from the Sportdec supplied .json data file
		*	Usually I would store data in database (Mongo or MySQL), but "spoofing" data store
		*	for the moment to make it simpler for the user to run the app.
		*
		*	This route accepts any argument for the :id parameter, however
		*	it will always return the same resource
		*/
		fs.readFile('./app/data/sampleMatchData.json', 'utf8', function (error, data) {

			if (!error) {

				var obj = JSON.parse(data);
				//var stringified = JSON.stringify(obj);
				res.send ({

		    		state: 'success',
		    		match: obj,
		    	});
			} else {

				res.send ({

		    		state: 'fail',
		    		match: null,
		    		message: error.message,
		    	});
			}
		});
	},

	getTeamsForMatchId: function (req, res) {

		res.send ("API says - GET team details " + req.params.matchID);
	},

	getEventsForMatchId: function (req, res) {

		res.send ("API says - GET event details for a match " + req.params.matchID);
	},
};