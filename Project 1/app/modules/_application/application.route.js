(function() {
	'use strict';

	angular.module('kartoffelskralder')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				views : {
					// Wrapping view
					'application': {
						templateUrl: 'modules/_application/application.template.html',
						controller: 'Application',
						controllerAs: 'application'
					},
					// sidebar
					'sidebar@application': {
						templateUrl: 'modules/shared/sidebar/sidebar.template.html',
						controller: 'Sidebar',
						controllerAs: 'sidebar'
					},
					// topbar
					'topbar@application': {
						templateUrl: 'modules/shared/topbar/topbar.template.html',
						controller: 'Topbar',
						controllerAs: 'topbar'
					}
				}
			};


			$stateProvider.state(Application);
		});
})();