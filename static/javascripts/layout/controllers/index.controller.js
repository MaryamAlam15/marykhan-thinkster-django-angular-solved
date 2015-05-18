/**
 * Created by marykhan on 15/05/15.
 */


(function(){

    angular
        .module('thinkster.layout.controllers')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', 'AuthenticationService', 'Posts', 'Snackbar'];

    function IndexController($scope, AuthenticationService, Posts, Snackbar){
        console.log("index controller");
        var vm = this;
        vm.authenticated = AuthenticationService.isAuthenticated();
        vm.posts = [];

        activate();

        function activate(){
            Posts.all().then(postsSuccessFn, postsErrorFn);

            $scope.$on('post.created', function(event, post){
                vm.posts.unshift(post);
            });

            $scope.$on('post.created.error', function(){
                vm.posts.shift();
            });
        }

        function postsSuccessFn(data, status, headers, config){
            vm.posts = data.data;
        }

        function postsErrorFn(data, status, headers, config){
            Snackbar.error(data.error);
        }
    }
})();