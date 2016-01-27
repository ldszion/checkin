(function() {
    'use strict';

    angular
      .module('app.auth')
      .config(Configuration);

    Configuration.$inject = ['$authProvider'];

    function Configuration($authProvider) {
        $authProvider.facebook({
            clientId: '1673291499621052'
        });
    }
})();