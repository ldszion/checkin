(function() {
    'use strict';

    angular
        .module('app.core.services')
        .service('Toaster', Toaster);

    Toaster.$inject = ['$mdToast', '$filter'];

    /* @ngInject */
    function Toaster($mdToast, $filter) {
        this.show = show;
        this.error = error;
        var translate = $filter('translate');

        var delay = 6000,
            position = 'top right',
            action = 'OK';

        ////////////////

        function show(text) {
            if (!text){
                return false;
            }
            text = translate(text);
            return $mdToast.show(
                $mdToast.simple()
                    .content(text)
                    .position(position)
                    .action(action)
                    .hideDelay(delay)
            );
        }

        function error(text) {
            if (!text){
                return false;
            }
            text = translate(text);
            return $mdToast.show(
                $mdToast.simple()
                    .content(text)
                    .position(position)
                    .theme('warn')
                    .action(action)
                    .hideDelay(delay)
            );
        }
    }
})();
