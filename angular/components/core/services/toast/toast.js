(function() {
    'use strict';

    angular
        .module('app.core.services')
        .service('Toaster', Toaster);

    Toaster.$inject = ['$mdToast'];

    /* @ngInject */
    function Toaster($mdToast) {
        this.show = show;
        this.error = error;

        var delay = 6000,
            position = 'top right',
            action = 'OK';

        ////////////////

        function show(content) {
            if (!content){
                return false;
            }
            return $mdToast.show(
                $mdToast.simple()
                    .content(content)
                    .position(position)
                    .action(action)
                    .hideDelay(delay)
            );
        }

        function error(content) {
            if (!content){
                return false;
            }
            return $mdToast.show(
                $mdToast.simple()
                    .content(content)
                    .position(position)
                    .theme('warn')
                    .action(action)
                    .hideDelay(delay)
            );
        }
    }
})();
