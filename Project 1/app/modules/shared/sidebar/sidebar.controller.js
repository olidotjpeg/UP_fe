(function () {
	'use strict';

	angular
		.module('kartoffelskralder')
		.controller('Sidebar', Sidebar);

	/* @ngInject */
	function Sidebar(NewsletterFactory) {
		/*jshint validthis: true */
		var vm 			= this;

		vm.newsletter	= false;
		vm.showLetter	= showLetter;
		vm.sendLetter	= sendLetter;

		function showLetter() {
			if(!vm.newsletter) {
				vm.newsletter = true;
			} else {
				vm.newsletter = false;
			}
		}

		function sendLetter() {
			NewsletterFactory.joinNewsletter({
				name: vm.name,
				email: vm.email
			}).then(function(result) {
				console.log(result);
			});
		}
	}

})();