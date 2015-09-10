(function() {
	'use strict';

	angular.module('kartoffelskralder')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.main',
				url: '/',
				views: {
					'main@application': {
						templateUrl: 'modules/main/index/index.template.html',
						controller: 'Index',
						controllerAs: 'index'
					}
				}
			};

			// var View = {
			// 	name: 'application.portfolioview',
			// 	url: '/portfolio/:id',
			// 	views: {
			// 		'main@application': {
			// 			templateUrl : 'modules/portfolio/view/view.template.html',
			// 			controller  : 'PortfolioView',
			// 			controllerAs: 'view'
			// 		}
			// 	}
			// };

			$stateProvider.state(Index);
			//$stateProvider.state(View);
		});
})();