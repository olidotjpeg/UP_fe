(function() {
	'use strict';

	angular.module('kartoffelskralder')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.team',
				url: '/team',
				views: {
					'main@application': {
						templateUrl: 'modules/team/index/index.template.html',
						controller: 'Team',
						controllerAs: 'team'
					}
				}
			};

			$stateProvider.state(Index);
		});
})();