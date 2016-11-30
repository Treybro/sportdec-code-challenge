angular.module ('mikesApp')
    .factory ('authenticationService', ['$http', function($http) {

    var baseUrl = '/auth/';
    var serviceFactory = {};

    //	Logs user in
    serviceFactory.login = function (user) {

        console.log ("Attempting to login using Authentication service");
        return $http.post (baseUrl + 'login', user);
    };

    //	Logs user out
    serviceFactory.logout = function () {

    	console.log ("Attempting to logout using Authentication service");
    	return $http.get (baseUrl + 'logout');
    };

    //	Registers an account for the user
    serviceFactory.signup = function (user) {

    	console.log ("Attempting to signup using Authentication service");
    	return $http.post (baseUrl + 'signup', user);
    }

    //	Validates authentication with the server
    serviceFactory.checkAuthentication = function (currentUser) {

    	console.log ("Attempting to check Authentication using Authentication service");
    	return $http.get (baseUrl + 'validate', currentUser);
    };

    return serviceFactory;
}]);