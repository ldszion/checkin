(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['UserService', 'Toaster'];

    /* @ngInject */
    /**
     * Controller responsável por recuperar os usuários e ser a controller API para usuários.
     */
    function UsersController(UserService, Toaster) {
        var vm = this;
        vm.users          = [];
        vm.remove         = remove;
        vm.displayedUsers = [].concat(vm.users);

        activate();

        //////////////

        function activate() {
            UserService.all().then(function (users) {
                vm.users = users;
            });
        }

        /**
         * Remove um usuario da listagem de usuarios
         * @param  {Object} user User
         * @return {void}
         */
        function remove(user) {
            UserService.delete(user).then(function(response) {
                angular.forEach(vm.users, function(oldUser){
                    if (oldUser.id === user.id) {
                        vm.users.splice(vm.users.indexOf(oldUser), 1);
                    }
                });
                Toaster.show('users.form.SUCCESSFULLY_DELETED');
            }).catch(function(error) {
                Toaster.error('users.form.' + error.data);
            });
        }
    }
})();