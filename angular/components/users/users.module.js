(function() {
    'use strict';

    angular
        .module('app.users', [
            'ui.router',
            'ngMessages',
            'validation.match',
            'cfp.loadingBar',
        ]);
})();