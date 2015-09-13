(function () {
	'use strict';

	angular
		.module('upCourse')
		.factory('UserFactory', UserFactory);

	function UserFactory($http, $q) {
		var service = {
			addUser: addUser
		};

		return service;

		function addUser(article) {
			var deferred = $q.defer();

			var url = '/api/user';

			var userPromise = $http.post(url, article).then(function(results) {
				deferred.resolve(results);
			}, function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		} 
	}

})();