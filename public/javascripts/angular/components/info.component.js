function InfoController ($rootScope) {

}

angular.module ('mikesApp').component ('mikesInfoComponent', {

    templateUrl: '../templates/components/info.component.template.html',
    controller: ['$rootScope', InfoController],
});