(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['user', '$stateParams', '$scope'];

    /* @ngInject */
    /**
     * Controller responsável por mostrar o perfil de usuário
     * @param {Object} user         Usuário
     * @param {Object} $stateParams Serviço de parametros das rotas
     * @param {Object} $scope       Escopo
     */
    function UserProfileController(user, $stateParams, $scope) {
        var vm = this;
        vm.user = user;

        activate();

        ////////////////

        /**
         * Funcao que inicializa o controller
         * @return {void}
         */
        function activate() {
            angular.forEach($scope.parent.users, function(user){
                if (user.id === $stateParams.id) {
                    vm.user = user;
                }
            });
        }
    }
})();