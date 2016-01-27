(function() {
    'use strict';

    angular
        .module('app.sidenav')
        .directive('menuLink', menuLinkDirective);

    function menuLinkDirective() {
        return {
            link: linkFunction,
            scope: {
                section: '='
            },
            templateUrl: 'sidenav/views/menu-link.html'
        };
    }

    function linkFunction(scope, element) {}
})();