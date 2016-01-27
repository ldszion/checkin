(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersController', UsersController);

    UsersController.$inject = [];

    /* @ngInject */
    /**
     * Controller responsável por recuperar os usuários e ser a controller API para usuários.
     */
    function UsersController() {
        var vm = this;
        vm.title = 'UsersController';
        vm.users = getUsers();

        ////////////////

        /**
         * Recupera todos os usuários cadastrados via API
         * @return {Array} Array de Usuários
         */
        function getUsers() {
            return [{
                id: 1,
                firstName: 'Polyana',
                lastName: 'Souza',
                imageUrl: 'img/profile1.jpg',
                profile: 'USER',
                email: 'polyana@gmail.com',
                stake: 'Brasília',
                ward: 'Guará II',
            }, {
                id: 2,
                firstName: 'Juliana',
                lastName: 'Oliveira',
                imageUrl: 'img/profile2.jpg',
                profile: 'USER',
                email: 'juliana@gmail.com',
                stake: 'Brasília',
                ward: 'Guará II',
            }, {
                id: 3,
                firstName: 'Marco',
                lastName: 'Santos',
                imageUrl: 'http://lorempixel.com/400/400/people/10',
                profile: 'ADMIN',
                email: 'marco@gmail.com',
                stake: 'Brasília',
                ward: 'Guará II',
            }, {
                id: 4,
                firstName: 'Augusto',
                lastName: 'Brito',
                imageUrl: 'http://lorempixel.com/400/400/people/8',
                profile: 'USER',
                email: 'augusto@gmail.com',
                stake: 'Brasília',
                ward: 'Asa Sul',
            }, {
                id: 5,
                firstName: 'Fulano',
                lastName: 'Silva',
                imageUrl: 'img/avatar.png',
                profile: 'USER',
                email: 'fulano@gmail.com',
                stake: 'Brasília',
                ward: 'Lago Sul',
            }];
        }
    }
})();