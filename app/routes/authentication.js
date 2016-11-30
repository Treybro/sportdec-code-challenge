var express = require('express');
var router = express.Router();

module.exports = function (passport) {

	//	Signup
    router.post ('/signup', passport.authenticate ('signup', {

    	successRedirect: '/auth/success',
    	failureRedirect: '/auth/fail',
    }));

	//	Login
    router.post ('/login', passport.authenticate ('login', {

    	successRedirect: '/auth/success',
    	failureRedirect: '/auth/fail',
    }));

    //	Logout
    router.get ('/logout', function (req, res) {

    	console.log ("Logging out...");
    	req.logout ();
    	res.redirect ('/');
    });

    //	Successful login attempt
    router.get ('/success', function (req, res) {

    	res.send ({

    		state: 'success',
    		user: req.user ? req.user : null,
    	});
    });

    //	Failed login attempt
    router.get ('/fail', function (req, res) {

    	res.send ({

    		state: 'fail',
    		user: null,
    		message:"Invalid username or password",
    	});
    });

    //  Check authentication
    router.get ('/validate', function (req, res) {

        console.log ("Have we already logged in?");
        if (req.isAuthenticated ()) {

            console.log ("User has already logged in...");
            res.send ({

                state: 'success',
                user: req.user ? req.user : null,
            });
        } else {

            console.log ("User is not logged in...");
            res.send ({

                state: 'fail',
                user: null,
                message:"User is not authenticated",
            });
        }
    });

    return router;
}