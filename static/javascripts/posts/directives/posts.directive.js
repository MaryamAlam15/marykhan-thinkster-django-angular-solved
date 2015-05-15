/**
 * Created by marykhan on 15/05/15.
 */


(function () {

    angular
        .module('thinkster.posts.directives')
        .directive('posts', posts);


    function posts() {

        var directive = {
            controller: 'PostsController',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                posts: '='
            },
            templateUrl: '/static/templates/posts/posts.html'
        };

        return directive;
    }
})();