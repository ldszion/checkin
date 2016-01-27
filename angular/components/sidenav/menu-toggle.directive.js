(function() {
    'use strict';

    angular
        .module('app.sidenav')
        .directive('menuToggle', menuToggleDirective);

    function menuToggleDirective() {
        return {
            link: linkFunction,
            scope: {
                section: '='
            },
            templateUrl: 'sidenav/views/menu-toggle.html'
        };
    }

    function linkFunction(scope, element) {}
})();