(function () {
	'use strict';

	angular
		.module('kartoffelskralder')
		.controller('Team', Team);

	/* @ngInject */
	function Team() {
		/*jshint validthis: true */
		var vm 		= this;
		vm.noTeam	= noTeam
		activate();

		function activate() {
		}

		function noTeam() {
			alert("It's not possible to join a team, our functionality is being build. Hang in tight Scotty!");
		}

	}

})();