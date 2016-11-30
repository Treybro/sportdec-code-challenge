function LatestMatchesController ($scope, $http, $rootScope, resourceService) {

	$scope.latestMatches = [];
	$scope.matchDetails = '';

	//	Check auth state
	if ($rootScope.isAuthenticated) {

		//	Get latest match results if we are authenticated
		resourceService.getLatestMatches ().success (function (data) {

			if (data.state == "success") {

				console.log ("Successfully obtained match list");
				$scope.latestMatches = data.matches;
			} else {

				console.log ("Unable to obtain match list");
			}
		});
	} else {

		console.log ("Matches cannot be retrieved unless you are logged in");
	}

	// View match details for selected match
	$scope.viewMatchDetails = function (match) {
		
		//	Only show details for specific id 
		resourceService.getMatchDetails (885885).success (function (data) {

			if (data.state == "success") {

				console.log ("Successfully obtained match details");
				$scope.matchDetails = data.match;
			}
		});
	};
}

angular.module ('mikesApp').component ('mikesLatestMatches', {

    templateUrl: '../templates/components/latestmatches.component.template.html',
    controller: ['$scope', '$http', '$rootScope', 'resourceService', LatestMatchesController],
});