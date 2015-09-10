var app = angular.module('kartoffelskralder', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});