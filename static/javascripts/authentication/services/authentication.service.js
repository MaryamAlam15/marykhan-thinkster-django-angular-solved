(function () {
    'use strict';

    angular
        .module('thinkster.authentication.services')
        .factory('Authentication', Authentication);

    function Authentication($cookies, $http) {
        var Authentication = {
            register: register
        };

        return Authentication;

        function register(email, password, username) {
            return $http.post('/api/v1/accounts/', {
                username: username,
                password: password,
                email: email
            }).success(function(data, status, headers, config) {
			$scope.message = data;
		});
        }
    }
})();