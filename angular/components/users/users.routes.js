(function() {
    'use strict';

    angular
        .module('app.users')
        .config(Routes);

    Routes.$inject = ['$stateProvider'];

    /* @ngInject */
    function Routes($stateProvider) {
        $stateProvider
            .state('app.users', {
                abstract: true,
                url: '/users',
                views: {
                    'content': {
                        template: '<div ui-view="content"></div>',
                        controller: 'UsersController as parent'
                    }
                }
            })
            .state('app.users.list', {
                url: '',
                views: {
                    'content': {
                        controller: 'UsersListController as vm',
                        templateUrl: 'users/views/list.html'
                    }
                }
            })
            .state('app.users.new', {
                url: '/new',
                views: {
                    'content': {
                        controller: 'UserFormController as vm',
                        templateUrl: 'users/views/new.html'
                    }
                }
            })
            .state('app.users.edit', {
                url: '/{id:int}/edit',
                resolve: {
                    user: resolveUser
                },
                views: {
                    'content': {
                        controller: 'UserEditController as vm',
                        templateUrl: 'users/views/edit.html',
                    }
                }
            })
            .state('app.users.profile', {
                url: '/{id:int}',
                resolve: {
                    user: resolveUser
                },
                views: {
                    'content': {
                        templateUrl: 'users/views/profile.html',
                        controller: 'UserProfileController as vm',
                    }
                }
            });
    }

    ///////////////////////
    // RESOLVE FUNCTIONS //
    ///////////////////////

    resolveUser.$inject = ['$timeout', 'cfpLoadingBar'];
    function resolveUser($timeout, cfpLoadingBar) {
        cfpLoadingBar.start();
        cfpLoadingBar.inc();
        var user = {
            id: 3,
            firstName: 'Polyana',
            lastName: 'Souza',
            email: 'polyanafsouza@gmail.com',
            imageUrl: 'img/profile1.jpg',
            profile: 'USER',
        };
        return $timeout(function() {
            cfpLoadingBar.complete();
            return user;
        }, 1000);
    }
})();
