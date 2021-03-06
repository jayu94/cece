
define([
	'angular',
	'angularRoute',
	'angularAria',
	'angularAnimate',
	'material',
	'messages',
	'materialDatatable',
	'loadingBar',
	'storage',
	'app/config',
	'app/route',

	// shared
	'app/shared/header/headerController',
	'app/shared/sidebar/sidebarController',
	'app/shared/services/messageService',
	'app/shared/services/userService',
	'app/login/app'
], function(angular, angularRoute, aria, animate, material, messages, datatable, loadingBar, storage, config, route, headerCtrl, sidebarCtrl, messageService, userService, login) {
	
	'use strict';
	
	// Declare app level module which depends on views, and components
	return angular.module('app', [
			'ngMaterial',
			'ngMessages',
			'ui.router',
			'md.data.table',
			'angular-loading-bar',
			'ngStorage',
			'app.login'
		])
		.config(route)
		.controller('headerController', headerCtrl)
		.controller('sidebarController', sidebarCtrl)
		.run(['$rootScope', '$state', 'userService', 'messageService', function run($rootScope, $state, userService, messageService) {

			//$rootScope.api = "http://api.saladwednesday.xyz/api";

			//$rootScope.$on('unauthorized', function () {
			//	$state.go("login");
			//	messageService.show("You have been logged out");
			//});

			//$rootScope.logout = function(){
			//	$state.go('login');
			//};

			//$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams, options){
			//	if(!userService.authenticated() && toState.name != 'login'){
			//		event.preventDefault();
			//		$state.go('login');
			//	}
			//	else if(userService.authenticated() && toState.name == 'login'){
			//		event.preventDefault();
			//		$state.go('home');
			//	}
			//});
		}])
});

