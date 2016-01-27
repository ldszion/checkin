(function() {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$auth', '$location'];

    function LoginController($auth, $location) {
        var vm = this;
        vm.authenticate = authenticate;

        ///////////////////

        /**
         * @param  {string}
         * @return {void}
         */
        function authenticate(provider) {
            $auth.authenticate('facebook').then(function(response) {
                $location.path('/dashboard');
            });
        }
    }
})();