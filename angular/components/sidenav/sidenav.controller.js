(function() {
    'use strict';

    angular
        .module('app.sidenav')
        .controller('SidenavController', SidenavController);

    SidenavController.$inject = [];

    function SidenavController() {
        var vm = this;

        vm.sections = [{
            name: 'sidenav.PANEL',
            type: 'link',
            icon: 'action:dashboard',
            state: 'app.dashboard'
            // name: 'Top Menu 1',
            // type: 'toggle',
            // icon: 'action:dashboard',
            // submenus: [{
            //     name: 'Submenu 1',
            //     type: 'link',
            //     state: 'app.dashboard'
            // }, {
            //     name: 'Submenu 2',
            //     type: 'link',
            //     state: 'app.users'
            // }]
        }, {
            name: 'sidenav.USERS_ADD',
            type: 'link',
            icon: 'social:person_add',
            state: 'app.users.new'
        }, {
            name: 'sidenav.USERS',
            type: 'link',
            icon: 'social:people',
            state: 'app.users.list'
        }, {
            name: 'auth.AUTHENTICATION',
            type: 'link',
            icon: 'action:verified_user',
            state: 'app.auth.login'
        }, {
            name: 'core.CORE',
            type: 'link',
            icon: 'action:extension',
            state: 'app.core.examples'
        }];
    }
})();