var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
//  Store the users in memory - not using a database
var users = {};

module.exports = function (passport) {

    // Passport utility method for persistent storage
    passport.serializeUser (function (user, done) {

        console.log ('Serializing user:', user.username);
        return done (null, user.username);
    });

    // Passport utility method for persistent storage
    passport.deserializeUser (function (username, done) {

        console.log ('Deserializing user:', username);
        return done (null, users[username]);
    });

    //  Passport Login utility method
    passport.use ('login', new LocalStrategy ({

            // allows us to pass back the entire request to the callback
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true,
        },
        function (req, username, password, done) {

            console.log ("Attempting to login, please wait...");

            //  Check if the users exists or not
            if (!users[username]) {

                console.log ('This user does not exist');
                return done (null, false);
            }

            //  Check if the password is correct for the user
            if (isValidPassword (users[username], password)) {

                console.log ("Login successful for user : " + username);
                return done (null, users[username]);
            } else {

                console.log ('Invalid password');
                return done (null, false)
            }
        }
    ));

    //  Passport Signup utility method
    passport.use ('signup', new LocalStrategy ({

            // allows us to pass back the entire request to the callback
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true,
        },
        function (req, username, password, done) {

            console.log ("Attempting to signup, please wait...");

            //  Check if the user exists already
            if (users[username]) {

                console.log ('User already exists');
                return done (null, false);
            }
    
            //  Store the user locally
            users[username] = {

                username: username,
                password: createHash (password),
            }
            
            console.log ("Successful user signup for : " + users[username].username);
            return done (null, users[username]);
        })
    );

    var isValidPassword = function (user, password) {

        return bCrypt.compareSync (password, user.password);
    };

    // Generates hash using bCrypt
    var createHash = function (password) {

        return bCrypt.hashSync (password, bCrypt.genSaltSync (10), null);
    };

    //  Add a default user for testing
    users["testuser"] = {

        username: "testuser",
        password: createHash ("testpassword"),
    }
};