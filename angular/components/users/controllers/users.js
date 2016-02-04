(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['UserService'];

    /* @ngInject */
    /**
     * Controller responsável por recuperar os usuários e ser a controller API para usuários.
     */
    function UsersController(UserService) {
        var vm = this;
        vm.users          = [];
        vm.displayedUsers = [].concat(vm.users);

        activate();

        //////////////

        function activate() {
            UserService.all().then(function (users) {
                vm.users = users;
            });
        }
    }
})();