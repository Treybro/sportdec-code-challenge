var chai = require ('chai');
var chaiHttp = require ('chai-http');
var server = require ('../../app');
var should = chai.should ();
var expect = require ("chai").expect;

chai.use (chaiHttp);

describe ("API Tests", function () {

	describe ("Test ApiController@get route", function () {

		it ("returns status 200", function (done) {

			/**
			*	GET request sent to /api/
			*	Should respond with 200
			*/
      		chai.request (server)
      			.get ('/api/')
      			.end ((err, res) => {

      				res.should.have.status (200);
      				done();
      			});
      		});
	});

	describe ("Test ApiController@post route", function () {

		it ("returns status 200", function (done) {

			/**
			*	POST request sent to /api/
			*	Should respond with 200
			*/
      		chai.request (server)
      			.post ('/api/')
      			.end ((err, res) => {

      				res.should.have.status (200);
      				done();
      			});
      		});
	});

	describe ("Test ApiController@getMatches route", function () {

		it ("returns status 200, success state and a list of 10 matches", function (done) {

      		chai.request (server)
      			.get ('/api/matches')
      			.end ((err, res) => {

      				/**
      				*	GET request sent to /api/matches
      				*	Should respond with 200
      				*	Should respond with success state
      				*	Should contain 10 latest match results
      				*/
      				expect (res.status).to.equal (200);
      				expect (res.body.state).to.equal ('success');
      				expect (res.body.matches.length).to.equal (10);
      				done();
      			});
      		});
	});

	describe ("Test ApiController@getMatchWithId route", function () {

		it ("returns status 200", function (done) {

      		chai.request (server)
      			.get ('/api/match/231232')
      			.end ((err, res) => {

      				/**
      				*	GET request sent to /api/match/_matchId
      				*	Should respond with 200
      				*/
      				expect (res.status).to.equal (200);
      				done();
      			});
      		});
	});

	describe ("Attempt to sign up a user", function () {

		it ("returns status 200, returns state success", function (done) {

      		chai.request (server)
      			.post ('/auth/signup')
      			.send({ username: 'testuser2', password: 'testpassword2' })
      			.end ((err, res) => {

      				/**
      				*	POST request sent to /auth/signup
      				*	Should respond with 200 
      				*	Should respond with a success state
      				*/
      				expect (res.status).to.equal (200);
      				expect (res.body.state).to.equal ('success');
      				done();
      			});
      		});
	});

	describe ("Attempt to log a user in", function () {

		it ("returns status 200, returns state success", function (done) {

      		chai.request (server)
      			.post ('/auth/login')
      			.send({ username: 'testuser', password: 'testpassword' })
      			.end ((err, res) => {

      				/**
      				*	POST request sent to /auth/login
      				*	Should respond with 200 
      				*	Should respond with a success state
      				*/
      				expect (res.status).to.equal (200);
      				expect (res.body.state).to.equal ('success');
      				done();
      			});
      		});
	});
});