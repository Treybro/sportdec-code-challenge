function NavBarController ($scope, $rootScope, $location, authenticationService) {

	//	Placed here away from authenticationController as it's used by the nav bar and not signup/login templates
	$scope.attemptLogout = function () {

		authenticationService.logout ().success (function (data) {

			console.log ("Successfully logged out!");
			$rootScope.isAuthenticated = false;
			$rootScope.currentUser = '';
			$location.path ('/');
		});
	};
}

angular.module ('mikesApp').component ('mikesNavBarComponent', {

    templateUrl: '../templates/components/navbar.component.template.html',
    controller: ['$scope', '$rootScope','$location', 'authenticationService', NavBarController],
});