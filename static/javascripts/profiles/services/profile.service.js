/**
 * Created by marykhan on 18/05/15.
 */


(function () {

    angular
        .module('thinkster.profiles.services')
        .factory('Profile', Profile);

    Profile.$inject = ['$http', 'AuthenticationService'];

    function Profile($http, AuthenticationService) {

        var profile = {
            destroy: destroy,
            get: get,
            update: update

        };

        return profile;


        function destroy(profile) {
            return $http.delete('/api/v1/accounts/' + profile.id + '/')
        }

        function get(username) {
            return $http.get('/api/v1/accounts/' + username + '/')

        }

        function update(profile) {
            var username = AuthenticationService.getAuthenticatedAccount().username;
            console.log(username);
            return $http.put('/api/v1/accounts/' + username + '/', profile)

        }

    }
})();