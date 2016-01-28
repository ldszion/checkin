(function() {
	'use strict';

	angular
	  .module('app.core.services')
	  .service('API', API);

	API.$inject = ['$http'];

	/**
	 * Servico de API para requisicoes http
	 * @param {Object} $http Servico $http do Angular JS
	 */
	function API($http) {
		this.get = get;
		this.post = post;

		var baseUrl = '/api';

		////////////////
		
		/**
		 * Realiza o get da url e retorna uma promise
		 * @param  {string} url Url desejada
		 * @return {Object}     Promise
		 */
		function get(url) {
			return $http.get(baseUrl + url);
		}

		/**
		 * Realiza o post para a url desejada passando os dados por parametro
		 * @param  {string} url  URL
		 * @param  {Object} data Dados a serem enviados via metodo post
		 * @return {Object}      Promise
		 */
		function post(url, data) {
			return $http.post(baseUrl + url, data);
		}
	}
})();