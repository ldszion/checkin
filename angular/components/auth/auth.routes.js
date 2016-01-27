(function() {
    'use strict';

    angular
      .module('app.auth')
      .config(Routes);

    Routes.$inject = ['$stateProvider'];

    function Routes($stateProvider) {
        $stateProvider
            .state('app.auth', {
                abstract: 'true',
                url: '/auth',
                views: {
                    'index@': {
                        templateUrl: 'auth/views/base.html'
                    }
                }
            })
            .state('app.auth.login', {
                url: '/login',
                views: {
                    'content': {
                        templateUrl: 'auth/views/login.html',
                        controller: 'LoginController as vm',
                    }
                }
            })
            .state('app.auth.register', {
                url: '/register',
                views: {
                    'content': {
                        templateUrl: 'auth/views/register.html'
                    }
                }
            })
            .state('app.auth.confirmation', {
                url: '/confirmation',
                views: {
                    'content': {
                        templateUrl: 'auth/views/confirmation.html'
                    }
                }
            });
    }
})();
