function EventsTabController ($scope, $http, $rootScope) {

}

angular.module ('mikesApp').component ('mikesEventsTabComponent', {

    templateUrl: '../templates/components/eventstab.component.template.html',
    controller: ['$scope', '$http', '$rootScope', Team1TabController],
    bindings: {

    	tabMatchData: '=',
    	tabMatchDetailsData: '='
    }
});