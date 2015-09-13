(function() {
	'use strict';

	angular.module('upCourse')
	.config(function ($stateProvider) {

		var Index = {
			name: 'application.main',
			url: '/',
			views: {
				'main@application': {
					templateUrl: 'modules/main/main.template.html',
					controller: 'Main',
					controllerAs: 'main'
				}
			}
		};

		$stateProvider.state(Index);
	});


})();