(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersListController', UsersListController);

    UsersListController.$inject = ['Toaster', '$scope', '$state'];

    function UsersListController(Toaster, $scope, $state) {
        var vm = this;
        vm.remove = remove;
        vm.save = save;
        vm.edit = edit;

        function remove (index) {
            var user = $scope.parent.users[index];
            $scope.parent.users.splice(index, 1);
        }
        function save (user) {
            console.log('save user: ', user.name);
        }
        function edit (user) {
            $state.go('app.users.edit', {id: user.id});
        }
    }
})();
