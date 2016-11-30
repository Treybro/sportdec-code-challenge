function SignupController ($scope, $http, $rootScope, $location, authenticationService) {

	$scope.user = {

		username: '',
		password: ''
	};
	$scope.authenticationError = '';

	//	Handles the users signup process
	$scope.attemptSignup = function () {

		authenticationService.signup ($scope.user).success (function (data) {

			if (data.state == 'success') {

				console.log ("We have signed up successfully!");
				$rootScope.isAuthenticated = true;
				$rootScope.currentUser = data.user.username;
				$location.path ('/matches');
			} else {

				console.log ("An error occurred : " + data.message);
				$scope.authenticationError = 'User already exists';
				$rootScope.isAuthenticated = false;
			}
		});
	}
}

angular.module ('mikesApp').component ('mikesSignupComponent', {

    templateUrl: '../templates/components/signup.component.template.html',
    controller: ['$scope', '$http', '$rootScope', '$location', 'authenticationService', SignupController],
});