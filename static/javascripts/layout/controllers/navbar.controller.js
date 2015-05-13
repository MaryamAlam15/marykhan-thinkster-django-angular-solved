/**
 * Created by marykhan on 12/05/15.
 */

(function () {
  'use strict';

  angular
    .module('thinkster.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'AuthenticationService'];

  function NavbarController($scope, AuthenticationService) {
    var vm = this;

    vm.logout = logout;

    function logout() {
      AuthenticationService.logout();
    }
  }
})();