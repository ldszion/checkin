(function() {
    'use strict';

    angular
        .module('app.users', [
            'app.units',
            'ui.router',
            'ui.utils.masks',
            'ngMessages',
            'validation.match',
            'cfp.loadingBar',
            'smart-table',
        ]);
})();