(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UserEditController', UserEditController);

    UserEditController.$inject = ['$scope', 'user', '$state'];

    /* @ngInject */
    /**
     * Controller responsável por editar um usuário
     * @param {Object} $scope Escopo
     * @param {Object} user   Usuário
     * @param {Object} $state Serviço de Rotas
     */
    function UserEditController($scope, user, $state) {
        var vm = this;
        vm.title = 'UserEditController';
        vm.user = user;
        vm.submit = submit;

        ////////////////

        /**
         * Funcao que envia o formulário
         * @return {void}
         */
        function submit() {
            angular.forEach($scope.parent.users, function(user) {
                if (user.id === vm.user.id) {
                    user = vm.user;
                }
            });
            $state.go('app.users.list');
        }
    }
})();