/**
 * Created by marykhan on 15/05/15.
 */

(function () {

    angular
        .module('thinkster.posts.controllers')
        .controller('NewPostController', NewPostController);

    NewPostController.$inject = ['$rootScope', '$scope', 'AuthenticationService', 'Posts', 'Snackbar'];

    function NewPostController($rootScope, $scope, AuthenticationService, Posts, Snackbar) {
        var vm = this;
        vm.submit = submit;
        vm.authenticated = AuthenticationService.isAuthenticated();

        function submit() {
            $rootScope.$broadcast('post.created', {
                content: vm.content,
                author: {
                    username: AuthenticationService.getAuthenticatedAccount().username
                }
            });

            $scope.closeThisDialog();
            Posts.create(vm.content).then(CreatePostSuccessFn, CreatePostErrorFn);

            function CreatePostSuccessFn(data, status, headers, config) {
                Snackbar.show('Post added successfully');
            }

            function CreatePostErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }

        }
    }
})();