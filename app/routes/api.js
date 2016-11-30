var express = require('express');
var router = express.Router();

//	Boiler plate to bind route/controller functions
function controller (name) {

	var parts = name.split ("@");
	return require ('../controllers/' + parts[0])[parts[1]];
}

//	Authentication function to protect API routes
var isAuthenticated = function (req, res, next) {

	console.log ("Validating Access");
	if (req.isAuthenticated ()) {

		console.log ("User is authenticated, continuing...");
		return next ();
	}

	console.log ("User is not authenticated, redirecting user...");
	res.redirect('/');
}

/* GET */
router.get ('/', isAuthenticated, controller ('ApiController@get'));

/* POST */
router.post ('/', isAuthenticated, controller ('ApiController@post'));

/* GET MATCHES */
router.get ('/matches', controller ('ApiController@getMatches'));

/* GET MATCH */
router.get ('/match/:matchID', isAuthenticated, controller ('ApiController@getMatchWithId'));

/* GET MATCH TEAMS */
router.get ('/match/teams/:matchID', isAuthenticated, controller ('ApiController@getTeamsForMatchId'));

/* GET MATCH EVENTS */
router.get ('/match/events/:matchID', isAuthenticated, controller ('ApiController@getEventsForMatchId'));

module.exports = router;