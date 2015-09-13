(function() {
	'use strict';

	angular.module('upCourse')
	.config(function ($stateProvider) {

		var Index = {
			name: 'application.member',
			url: '/member',
			views: {
				'main@application': {
					templateUrl: 'modules/member/member.template.html',
					controller: 'Member',
					controllerAs: 'member'
				}
			}
		};

		$stateProvider.state(Index);
	});


})();