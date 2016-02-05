(function() {
    'use strict';

    angular
      .module('app.users')
      .service('UserService', UserService);

    UserService.$inject = ['API', '$q'];

    function UserService(API, $q) {
        var self = this;
        self.all    = all;
        self.$new   = $new;
        self.get    = get;
        self.save   = save;
        self.delete = destroy;
        self.users  = [];

        ////////////////

        /**
         * Retorna todos os usuários
         * @return {array|Object} Promise ou um Array
         */
        function all() {
            var deferred = $q.defer();
            if (self.users.length > 0) {
                deferred.resolve(self.users);
            }
            API.get('/users').then(function(response) {
                self.users = response.data;
                deferred.resolve(self.users);
                return self.users;
            });
            return deferred.promise;
        }

        /**
         * Retorna um novo objeto com o sexo pre-definido
         * @return {Object} Novo Usuario
         */
        function $new() {
            return {
                gender: 'male'
            };
        }

        /**
         * Retorna um usuario de acordo com seu id
         * @param  {int} id ID
         * @return {Object} Promise
         */
        function get(id) {
            return API.get('/users/' + id).then(function(user) {
                return user.data;
            });
        }

        /**
         * Insere um novo ou atualiza usuario
         * @param  {Object} user Usuario novo ou antigo
         * @return {Object}      Promise, depois usuario
         */
        function save(user) {
            if (user.id) {
                return API.post('/users/' + user.id, user).then(function(updated) {
                    self.users.length = 0;
                    return user.data;
                });
            }
            return API.post('/users', user).then(function(user) {
                self.users.length = 0;
                return user.data;
            });
        }

        /**
         * Implementacao do metodo delete do servico de usuario
         * @param  {Object} user Referencia do objeto a ser removido
         * @return {Object}      Promise
         */
        function destroy(user) {
            return API.delete('/users/' + user.id);
        }
    }
})();