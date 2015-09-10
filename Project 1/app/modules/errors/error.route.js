(function() {
	'use strict';

	angular.module('kartoffelskralder')
		/* @ngInject */
		.config(function ($stateProvider) {

			var notFound = {
				name: 'application.404',
				url: '/404',
				views: {
					'main@application': {
						templateUrl: 'modules/errors/404/404.template.html',
						controller: 'NotFound',
						controllerAs: 'notfound'
					}
				}
			};

			$stateProvider.state(notFound);
		});
})();