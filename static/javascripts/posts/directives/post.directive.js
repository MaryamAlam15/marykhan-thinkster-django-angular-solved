/**
 * Created by marykhan on 15/05/15.
 */


(function(){
    angular
        .module('thinkster.posts.directives')
        .directive('post', post);

    function post(){
        var directive = {
            restrict: 'E',
            scope: {
                post: '='
            },
            templateUrl: '/static/templates/posts/post.html'
        };

        return directive;
    }
})();