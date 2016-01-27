(function() {
    'use strict';

    angular
        .module('app.core')
        .config(Routes);

    Routes.$inject = ['$stateProvider'];

    /* @ngInject */
    function Routes($stateProvider) {
        $stateProvider
            .state('app.core', {
                abstract: true,
                url: '/core',
                views: {
                    'content': {
                        template: '<div ui-view="content" class="animated fadeIn"></div>'
                    }
                }
            })
            .state('app.core.examples', {
                url: '/examples',
                views: {
                    'content': {
                        templateUrl: 'core/views/examples.html',
                        controller: 'CoreController as vm',
                    }
                }
            });
    }
})();