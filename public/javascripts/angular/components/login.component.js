function LoginController ($scope, $http, $rootScope, $location, authenticationService) {

	$scope.user = {

		username: '',
		password: ''
	};
	$scope.authenticationError = '';

	//	Handles the users login process
	$scope.attemptLogin = function () {

		//	Calls the login function provided by the authentication service
		authenticationService.login ($scope.user).success (function (data) {

			if (data.state == 'success') {

				console.log ("We have logged in successfully!");
				$rootScope.isAuthenticated = true;
				$rootScope.currentUser = data.user.username;
				$location.path ('/matches');
			} else {

				console.log ("An error occurred : " + data.message);
				$scope.authenticationError = data.message;
				$rootScope.isAuthenticated = false;
			}
		});
	};
}

angular.module ('mikesApp').component ('mikesLoginComponent', {

    templateUrl: '../templates/components/login.component.template.html',
    controller: ['$scope', '$http', '$rootScope', '$location', 'authenticationService', LoginController],
});