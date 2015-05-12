/**
 * Created by marykhan on 06/05/15.
 */

(function () {
    'use strict';

    angular
        .module('thinkster.authentication.controllers')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location', '$scope', 'AuthenticationService'];

    function RegisterController($location, $scope, AuthenticationService) {
        var vm = this;
        vm.register = register;
        activate();

        function register() {
            AuthenticationService.register(vm.email, vm.password, vm.username);
        }

        function activate() {
            // If the user is authenticated, they should not be here.
            if (AuthenticationService.isAuthenticated()) {
                $location.url('/');
            }
        }
    }
})();