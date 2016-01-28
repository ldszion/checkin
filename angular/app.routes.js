(function() {
    'use strict';

    angular
        .module('app')
        .config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/', '/dashboard');
        $urlRouterProvider.when('', '/dashboard');
        $urlRouterProvider.otherwise('/404');
        $stateProvider
            .state('app', {
                abstract: true,
                url: '',
                views: {
                    'index': {
                        templateUrl: 'dashboard/views/dashboard-1.html',
                        controller: 'AppController',
                        controllerAs: 'app',
                    },
                    'toolbar@app': {
                        templateUrl: 'dashboard/views/toolbar/toolbar-1.html'
                    },
                }
            })
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'content': {
                        templateUrl: 'dashboard/views/content-example.html'
                    }
                }
            })
            .state('app.404', {
                url: '/404',
                views: {
                    'index@': {
                        templateUrl: 'dashboard/views/404.html'
                    }
                }
            });
    }
})();