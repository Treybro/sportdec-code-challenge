function InfoTabController ($scope, $http, $rootScope) {

}

angular.module ('mikesApp').component ('mikesInfoTabComponent', {

    templateUrl: '../templates/components/infotab.component.template.html',
    controller: ['$scope', '$http', '$rootScope', InfoTabController],
    bindings: {

    	tabMatchData: '=',
    	tabMatchDetailsData: '='
    }
});