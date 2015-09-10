(function () {
	'use strict';

	angular
		.module('kartoffelskralder')
		.factory('NewsletterFactory', NewsletterFactory);

	/* @ngInject */
	function NewsletterFactory($http, $q) {

		var service = {
			joinNewsletter:	joinNewsletter
		};

		return service;

		function joinNewsletter(article) {
			var deferred = $q.defer();

			var url = '/api/newsletter';

			var storesPromise = $http.post(url,article).then(function(results) {
				deferred.resolve(results);
			}, function(err) {
				deferred.reject(err);
			});
			return deferred.promise;
		}

	}

})();