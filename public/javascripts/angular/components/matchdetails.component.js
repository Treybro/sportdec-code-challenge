function MatchDetailsController ($scope, $http, $rootScope) {

}

angular.module ('mikesApp').component ('mikesMatchDetailsComponent', {

    templateUrl: '../templates/components/matchdetails.component.template.html',
    controller: ['$scope', '$http', '$rootScope', MatchDetailsController],
    bindings: {

    	matchData: '<',
    	matchDetailsData: '<'
    }
});