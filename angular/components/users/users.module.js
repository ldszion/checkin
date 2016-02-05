(function() {
    'use strict';

    angular
        .module('app.users', [
            'app.units',
            'app.tags',
            'ui.router',
            'ui.utils.masks',
            'ngMessages',
            'validation.match',
            'cfp.loadingBar',
            'smart-table',
        ]);
})();