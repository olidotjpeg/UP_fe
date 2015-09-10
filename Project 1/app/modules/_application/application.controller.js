(function () {
	'use strict';

	angular
		.module('kartoffelskralder')
		.controller('Application', Application);

	/* @ngInject */
	function Application() {
		/*jshint validthis: true */
		var vm 			= this;
		vm.openSidebar 	= openSidebar;
		vm.sideBarState = false;
 		activate();

		function activate() {			
		}

		function openSidebar() {
			if(!vm.sideBarState) {
				vm.sideBarState = true;
			} else {
				vm.sideBarState = false;
			}

			console.log(vm.sideBarState);
		}

	}

})();