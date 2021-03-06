'use strict';

require('angular');
require('ngResource');
require('ngSanitize');
require('ngRoute');
require('ngAnimate');
require('./game/game');
require('LocalStorageModule');

var app = angular.module('app', ['ngResource', 'ngSanitize', 'LocalStorageModule', 'ngRoute', 'ngAnimate', 'game']);


app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider.when('/games/:playerId?', {
        template: require('./game/components/connectFour/connectFour.html'),
        controller: 'ConnectFourController',
        controllerAs: 'CFour'
    }).otherwise({ /*  Catch-all */
        template: "404 Page Stub"
    });

}]);

module.exports = app;
