(function() {
	'use strict';

	angular
	  .module('app.users')
	  .service('UserService', UserService);

	UserService.$inject = ['API'];

	function UserService(API) {
		this.all = all;

		////////////////

		function all() {
			return API.get('/users').then(function(response) {
				return response.data;
			});
		}
	}
})();