define([], function(){
    'use strict';

    function route($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: "/",
                template: '<div layout="column" layout-margin>Dashboard</div>'
            })
    }

    return ["$stateProvider", "$urlRouterProvider", "$locationProvider", route];
});