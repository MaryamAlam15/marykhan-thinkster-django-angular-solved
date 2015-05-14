(function () {
//    'use strict';

    angular
        .module('thinkster.authentication.services')
        .factory('AuthenticationService', AuthenticationService);

    function AuthenticationService($cookies, $http) {

        var authService = {
            getAuthenticatedAccount: getAuthenticatedAccount,
            isAuthenticated: isAuthenticated,
            login: login,
            register: register,
            setAuthenticatedAccount: setAuthenticatedAccount,
            unauthenticate: unauthenticate,
            logout: logout
        };

        return authService;

        function register(scope, email, password, username) {
            return $http.post('/api/v1/accounts/', {
                username: username,
                password: password,
                email: email
            }).then(registerSuccessFn, registerErrorFn);


            function registerSuccessFn(data, status, headers, config) {
                authService.login(email, password);
            }

            function registerErrorFn(data, status, headers, config) {
                if (data.data.email)
                    scope.email_error = data.data.email[0];
                if (data.data.username)
                    scope.email_error = data.data.username[0];

            }
        }

//      ################################################################################################################

        function login(scope, email, password) {
            return $http.post('/api/v1/auth/login/', {
                email: email, password: password
            }).then(loginSuccessFn, loginErrorFn);

            function loginSuccessFn(data, status, headers, config) {
                authService.setAuthenticatedAccount(data.data);

                window.location = '/';
            }

            function loginErrorFn(data, status, headers, config) {
                scope.error = data.data.message;
            }
        }

//    #################################################################################################################

        function getAuthenticatedAccount() {
            if (!$cookies.authenticatedAccount) {
                return;
            }

            return JSON.parse($cookies.authenticatedAccount);
        }


        function isAuthenticated() {
//            return !!$cookies.authenticatedAccount; // works in chrome
            return !!Boolean($cookies.authenticatedAccount); // works in ff
        }

        function setAuthenticatedAccount(account) {
            $cookies.authenticatedAccount = JSON.stringify(account);
        }


        function unauthenticate() {
            delete $cookies.authenticatedAccount;
        }


//    #################################################################################################################

        function logout() {
            return $http.post('/api/v1/auth/logout/')
                .then(logoutSuccessFn, logoutErrorFn);

            function logoutSuccessFn(data, status, headers, config) {
                authService.unauthenticate();

                window.location = '/';
            }

            function logoutErrorFn(data, status, headers, config) {
                console.error('Epic failure!');
            }
        }

    }
})();