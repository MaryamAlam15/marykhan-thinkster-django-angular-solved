/**
 * Created by marykhan on 12/05/15.
 */


(function () {
  'use strict';

  angular
    .module('thinkster.authentication.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'AuthenticationService'];

  /**
  * @namespace LoginController
  */
  function LoginController($location, $scope, AuthenticationService) {
    var vm = this;

    vm.login = login;

    activate();

    function activate() {
      // If the user is authenticated, they should not be here.
      if (AuthenticationService.isAuthenticated()) {
        $location.url('/');
      }
    }

    function login() {
      AuthenticationService.login(vm.email, vm.password);
    }
  }
})();