(function() {
	'use strict';

	angular.module('kartoffelskralder')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.membership',
				url: '/membership',
				views: {
					'main@application': {
						templateUrl: 'modules/membership/index/index.template.html',
						controller: 'Membership',
						controllerAs: 'membership'
					}
				}
			};

			$stateProvider.state(Index);
		});
})();