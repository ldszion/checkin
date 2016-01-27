(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UserFormController', UserFormController);

    UserFormController.$inject = ['$timeout', '$rootScope', '$scope', '$state'];

    function UserFormController($timeout, $rootScope, $scope, $state) {
        var vm = this;

        vm.user = {
            profile: 'USER',
            imageUrl: 'img/avatar.png',
            gender: 'male'
        };
        vm.submit = submit;
        vm.loadWards = loadWards;
        vm.stakes = [
            {id: 1, name: 'Brasília'},
            {id: 2, name: 'Brasília Norte'}
        ];
        vm.wards = null;

        activate();

        ///////////////////////////////////////

        function activate() {
            vm.genders = [{
                label: 'users.MALE',
                value: 'male',
            }, {
                label: 'users.FEMALE',
                value: 'female',
            }];

        }

        function submit() {
            $scope.parent.users.push(vm.user);
            $state.go('app.users.list');
        }

        function loadWards() {
            console.log('selected stake', vm.user.stake);
            vm.wards = [
                {id: 2, name: 'Asa Sul'},
                {id: 1, name: 'Guará I'},
            ];
        }
    }
})();