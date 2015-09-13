(function () {
	'use strict';

	angular
		.module('upCourse')
		.controller('Member', Member);

	/* @ngInject */
	function Member(UserFactory) {
		/*jshint validthis: true */
		var vm 		= this;
		vm.addUser	= addUser;

		activate();

		function activate() {
		}

		function addUser() {
			UserFactory.addUser({
				name: vm.name,
				email: vm.email
			}).then(function(result) {
				console.log(result)
			});
		}

	}

})();