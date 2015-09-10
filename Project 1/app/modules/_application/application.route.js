(function() {
	'use strict';

	angular.module('upApp')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				views : {
					// Wrapping view
					'application': {
						templateUrl: 'modules/_application/application.template.html'
					}
				}
			};


			$stateProvider.state(Application);
		});
})();
