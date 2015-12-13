'use strict';

// Declare app level module which depends on views, and components
angular.module('gundCI', [
        'ui.router',
        'gundCI.utils',
        'gundCI.index'
    ])

    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }]);
