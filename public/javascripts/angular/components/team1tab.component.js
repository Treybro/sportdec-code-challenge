function Team1TabController ($scope, $http, $rootScope) {

}

angular.module ('mikesApp').component ('mikesTeam1TabComponent', {

    templateUrl: '../templates/components/team1tab.component.template.html',
    controller: ['$scope', '$http', '$rootScope', Team1TabController],
    bindings: {

    	tabMatchData: '=',
    	tabMatchDetailsData: '='
    }
});