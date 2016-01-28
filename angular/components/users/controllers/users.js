(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['UserService', 'users'];

    /* @ngInject */
    /**
     * Controller responsável por recuperar os usuários e ser a controller API para usuários.
     */
    function UsersController(UserService, users) {
        var vm = this;
        vm.users = users;
        vm.displayedUsers = [].concat(vm.users);
    }
})();