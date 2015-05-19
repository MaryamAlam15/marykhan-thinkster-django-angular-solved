/**
 * Created by marykhan on 18/05/15.
 */


(function () {

    angular
        .module('thinkster.profiles.controllers')
        .controller('ProfileSettingsController', ProfileSettingsController);

    ProfileSettingsController.$inject = ['$routeParams', '$location', 'AuthenticationService', 'Profile', 'Snackbar'];

    function ProfileSettingsController($routeParams, $location, AuthenticationService, Profile, Snackbar) {
        var vm = this;

        vm.destroy = destroy;
        vm.update = update;

        activate();

        function activate() {
            var authenticatedAccount = AuthenticationService.getAuthenticatedAccount();
            var username = $routeParams.username.substr(1);

            if (!authenticatedAccount) {
                $location.url('/');
                Snackbar.error('You are not authorized to view this page.');
            }
            else {
                if (authenticatedAccount.username !== username) {
                    $location.url('/');
                    Snackbar.error('You are not authorized to view this page.');
                }
            }

            Profile.get(username).then(profileGetSuccessFn, profileGetErrorFn);

            function profileGetSuccessFn(data, status, headers, config) {
                vm.profile = data.data;
            }

            function profileGetErrorFn(data, status, headers, config) {
                $location.url('/');
                Snackbar.error('That user does not exist.');
            }

        }

        function destroy() {
            Profile.destroy(vm.profile).then(profileDestroySuccessFn, profileDestroyErrorFn);

            function profileDestroySuccessFn(data, status, headers, config) {
                AuthenticationService.unauthenticate();
                $location.url('/');

                Snackbar.show('Your account has been deleted.');
            }

            function profileDestroyErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }
        }


        function update() {
            Profile.update(vm.profile).then(profileUpdateSuccessFn, profileUpdateErrorFn);

            function profileUpdateSuccessFn(data, status, headers, config) {
                AuthenticationService.setAuthenticatedAccount(vm.profile);
                window.location = '/';

                Snackbar.show('Your account has been updated.');
            }

            function profileUpdateErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }
        }

    }
})();