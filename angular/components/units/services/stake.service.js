(function() {
    'use strict';

    angular
      .module('app.units')
      .service('StakeService', StakeService);

    StakeService.$inject = ['API'];

    /**
     * Servico para Estacas
     * @param {Object} API
     */
    function StakeService(API) {
        this.all = all;

        //////////////////

        /**
         * Retorna todas as estacas
         * @return {Object} Promise
         */
        function all() {
            return API.get('/stakes').then(function(response) {
                return response.data;
            });
        }
    }
})();