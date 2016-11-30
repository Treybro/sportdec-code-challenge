angular.module ('mikesApp')
    .factory ('resourceService', ['$http', function($http) {

    var baseUrl = '/api/';
    var serviceFactory = {};

    //	Get a list of the latest match results
    serviceFactory.getLatestMatches = function () {

    	console.log ("Attempting to retrieve match list using Resource service");
    	return $http.get (baseUrl + 'matches');
    }

    //	Show details for a specific match id
    serviceFactory.getMatchDetails = function (matchId) {

    	console.log ("Attempting to retrieve match details using Resource service");
    	return $http.get (baseUrl + 'match/' + matchId);
    }

    return serviceFactory;
}]);