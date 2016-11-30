var app = angular.module ("mikesApp", ["ngRoute"]).run (function ($rootScope, $http, $location, authenticationService) {

	$rootScope.appName = "Mike's awesome app";
	//	Keep track of authentication
	$rootScope.isAuthenticated = false;
	$rootScope.currentUser = '';
	
	//	Allows us to track if we are authenticated or not with the server on page refreshes
	authenticationService.checkAuthentication ($rootScope.currentUser).success (function (data) {

		//	Are we logged in or not?
		if (data.state == 'success') {

			console.log ("User is already logged in!");
			$rootScope.isAuthenticated = true;
			$rootScope.currentUser = data.user.username;
		} else {

			console.log ("User is not currently logged in");
			$rootScope.isAuthenticated = false;
			$rootScope.currentUser = '';
		}
	});
});

//	Angular routing
app.config (function ($routeProvider, $locationProvider) {

	$routeProvider.when ("/", {

		templateUrl: '../templates/views/welcome.view.template.html'
	}).when ("/login", {

		templateUrl: '../templates/views/login.view.template.html'
	}).when ("/signup", {

		templateUrl: '../templates/views/signup.view.template.html'
	}).when ("/matches", {

		templateUrl: '../templates/views/matches.view.template.html'
	});

	/**	TODO  **/
	//	Pretty URLS - bug, it disables page refreshes :/
	//$locationProvider.html5Mode (true);
});

/**
*
*	Directives
*
**/
app.directive ('toggleTab', function () {

	return {

		link: function (scope, element, attrs) {

			element.bind ('click', function (e) {

				e.preventDefault ();
				$(element).tab ('show');
            });
        }
    };
});