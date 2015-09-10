(function () {
	'use strict';

	angular
		.module('kartoffelskralder')
		.controller('Topbar', Topbar);

	/* @ngInject */
	function Topbar($stateParams, $state) {
		/*jshint validthis: true */
		var vm 			= this;

		console.log($state.current.url);

	}

})();