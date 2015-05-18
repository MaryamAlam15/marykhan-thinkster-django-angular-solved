/**
 * Created by marykhan on 18/05/15.
 */

(function(){

    angular
        .module('thinkster.profiles.controllers')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$routeParams', 'Profile', 'Posts', '$location', 'Snackbar'];

    function ProfileController($routeParams, Profile, Posts, $location, Snackbar){
        var vm = this;
        vm.profile = undefined;
        vm.posts = [];

        activate();

        function activate(){
            var username = $routeParams.username.substr(1);
            Profile.get(username).then(profileSuccessFn, profileErrorFn);
            Posts.get(username).then(postsSuccessFn, postsErrorFn);


            function profileSuccessFn(data, status, headers, config){
                vm.profile = data.data;

            }
            function profileErrorFn(data, status, headers, config){
                $location.url('/');
                Snackbar.error("User doesn't exits.");
            }
            function postsSuccessFn(data, status, headers, config){
                vm.posts = data.data;
            }
            function postsErrorFn(data, status, headers, config){
                Snackbar.error(data.data.error)
            }
        }
    }
})();