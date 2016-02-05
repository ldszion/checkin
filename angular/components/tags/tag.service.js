(function() {
    'use strict';

    angular
      .module('app.tags')
      .service('TagService', TagService);

    TagService.$inject = ['API', '$q'];

    /**
     * Servico de Tags
     * @param {Object} API Servico de API
     */
    function TagService(API, $q) {
        var self = this;
        self.all = all;
        var tags = [
            {id: 1, name: 'Pago'},
            {id: 2, name: 'Não Pago'},
            {id: 3, name: 'Não Membro'},
            {id: 4, name: 'Líder do MAS'},
        ];

        //////////////

        function all() {
            var deferred = $q.defer();
            deferred.resolve(tags);
            return deferred.promise;
        }
    }
})();