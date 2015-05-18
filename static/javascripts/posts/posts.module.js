/**
 * Created by marykhan on 15/05/15.
 */


(function () {

    angular
        .module('thinkster.posts', [
            'thinkster.posts.controllers',
            'thinkster.posts.directives',
            'thinkster.posts.services'
        ]);

    angular
        .module('thinkster.posts.controllers', []);

    angular
        .module('thinkster.posts.services', []);

    angular
        .module('thinkster.posts.directives', []);
})();