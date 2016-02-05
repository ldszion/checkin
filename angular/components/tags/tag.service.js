(function() {
    'use strict';

    angular
      .module('app.tags')
      .service('TagService', TagService);

    TagService.$inject = ['API'];

    /**
     * Servico de Tags
     * @param {Object} API Servico de API
     */
    function TagService(API) {
        var self = this;
        self.all = all;

        //////////////

        function all() {
            return API.get('/tags').then(function(response) {
                return response.data;
            });
        }
    }
})();