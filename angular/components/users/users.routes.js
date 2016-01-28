(function() {
    'use strict';

    angular
        .module('app.users')
        .config(Routes);

    Routes.$inject = ['$stateProvider'];

    /* @ngInject */
    /**
     * Rotas para o componente users
     * @param {Object} $stateProvider Provedor de states
     */
    function Routes($stateProvider) {
        $stateProvider
            .state('app.users', {
                url: '/users',
                resolve: {
                    users: getUsers
                },
                views: {
                    'content@app': {
                        controller: 'UsersController as vm',
                        templateUrl: 'users/views/list.html',
                    }
                },
            });
    }

    ///////////////////////
    // RESOLVE FUNCTIONS //
    ///////////////////////

    getUsers.$inject = ['UserService'];
    /**
     * Resolve a lista de usuarios
     * @param  {Object} UserService Servico de Usuario
     * @return {Object}             Promise
     */
    function getUsers(UserService) {
        return UserService.all();
    }
})();
