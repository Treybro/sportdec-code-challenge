function Team1TabController ($scope, $http, $rootScope) {

}

angular.module ('mikesApp').component ('mikesTeam2TabComponent', {

    templateUrl: '../templates/components/team2tab.component.template.html',
    controller: ['$scope', '$http', '$rootScope', Team1TabController],
    bindings: {

    	tabMatchData: '=',
    	tabMatchDetailsData: '='
    }
});