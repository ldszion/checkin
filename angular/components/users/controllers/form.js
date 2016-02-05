(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UserFormController', UserFormController);

    UserFormController.$inject = ['user', '$state', 'UserService', 'StakeService', 'Toaster', 'TagService'];

    function UserFormController(user, $state, UserService, StakeService, Toaster, TagService) {
        var vm = this;
        vm.user          = user;
        vm.save          = save;
        vm.stakes        = [];
        vm.submitted     = false;
        vm.tags          = [];
        vm.transformChip = transformChip;

        activate();

        ///////////////////////////////////////

        function activate() {
            var stakeId = null;
            vm.user.birthday = new Date(vm.user.birthday);

            // Estacas
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

            // Etiquetas
            TagService.all().then(function(tags) {
                vm.tags = tags;
                vm.user.tags = [vm.tags[1]];
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

        /**
         * Transforma um objeto chip adequadamente para as tags
         * @param  {Object|string} chip Objeto ou string da Etiqueta
         * @return {Object} tag
         */
        function transformChip(chip) {
            if (angular.isObject(chip)) {
                return chip;
            }
            return { name: chip };
        }
    }
})();