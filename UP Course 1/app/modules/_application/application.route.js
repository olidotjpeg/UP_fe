(function() {
	'use strict';

	angular.module('upCourse')
	.config(function ($stateProvider) {

		var Application = {
			name: 'application',
			abstract: true,
			views: {
				// Wrapping view
				'application': {
					templateUrl: 'modules/_application/application.template.html'
				},
				// Topbar
				'topbar@application': {
					templateUrl: 'modules/shared/topbar/topbar.template.html',
					controller: 'Topbar',
					controllerAs: 'topbar'
				},
				// Sidebar
				'sidebar@application': {
					templateUrl: 'modules/shared/sidebar/sidebar.template.html',
					controller: 'Sidebar',
					controllerAs: 'sidebar'
				}
			}
		}

		$stateProvider.state(Application);
	});


})();