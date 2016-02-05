(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UserFormController', UserFormController);

    UserFormController.$inject = ['user', '$state', 'UserService', 'StakeService', 'Toaster'];

    function UserFormController(user, $state, UserService, StakeService, Toaster) {
        var vm = this;
        vm.user      = user;
        vm.save      = save;
        vm.stakes    = [];
        vm.submitted = false;

        activate();

        ///////////////////////////////////////

        function activate() {
            var stakeId = 0;
            vm.user.birthday = new Date(vm.user.birthday);
            if (vm.user.ward !== null && vm.user.ward !== undefined) {
                stakeId = vm.user.ward.stake_id;
            }
            StakeService.all().then(function(stakes) {
                vm.stakes = stakes;
                angular.forEach(stakes, function(stake){
                    if (stake.id === stakeId) {
                        vm.selectedStake = stake;
                    }
                });
            }, function(error) {
                Toaster.error(error.data);
            });
        }

        /**
         * Salva o usuario do formulario
         * @param  {Object} form Form
         * @return {void}
         */
        function save(form) {
            vm.submitted = true;
            if (form.$invalid) {
                return;
            }
            UserService.save(vm.user).then(function(response) {
                Toaster.show('users.form.SUCCESSFULLY_SAVED');
                $state.go('app.users');
            }, function(error) {
                Toaster.error(error);
            });
        }
    }
})();