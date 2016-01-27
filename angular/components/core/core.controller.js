(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController);

    CoreController.$inject = ['Toaster'];

    /* @ngInject */
    function CoreController(Toaster) {
        var vm = this;
        vm.showToaster = showToaster;

        activate();

        ////////////////

        function activate() {
        }

        function showToaster (error) {
            if (error) {
                Toaster.error('Ops! Este é um toaster error');
            } else {
                Toaster.show('Olá mundo');
            }
        }
    }
})();