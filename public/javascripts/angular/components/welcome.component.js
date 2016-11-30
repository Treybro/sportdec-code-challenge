function WelcomeController ($rootScope) {

}

angular.module ('mikesApp').component ('mikesWelcomeComponent', {

    templateUrl: '../templates/components/welcome.component.template.html',
    controller: ['$rootScope', WelcomeController],
});