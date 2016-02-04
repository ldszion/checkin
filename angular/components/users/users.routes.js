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
                views: {
                    'content@app': {
                        controller: 'UsersController as vm',
                        templateUrl: 'users/views/list.html',
                    }
                },
            })
            .state('app.usersNew', {
                url: '/users/new',
                resolve: {
                    user: newUser
                },
                views: {
                    'content@app': {
                        controller: 'UserFormController as vm',
                        templateUrl: 'users/views/new.html',
                    }
                },
            })
            .state('app.usersEdit', {
                url: '/users/:id/edit',
                resolve: {
                    user: getUser
                },
                views: {
                    'content@app': {
                        controller: 'UserFormController as vm',
                        templateUrl: 'users/views/edit.html',
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

    newUser.$inject = ['UserService'];
    function newUser(UserService) {
        return UserService.$new();
    }

    getUser.$inject = ['$stateParams', 'UserService'];
    function getUser(params, UserService) {
        return UserService.get(params.id);
    }
})();
