(function () {
    console.log("thinkster.js");
    angular
        .module('thinkster', [
            'thinkster.routes',
            'thinkster.authentication',
            'thinkster.config',
            'thinkster.layout',
            'thinkster.posts',
            'thinkster.profiles',
            'thinkster.utils'
        ]);

    angular
        .module('thinkster.routes', ['ngRoute']);

    angular
        .module('thinkster.config', []);

    angular
        .module('thinkster')
        .run(run);

    run.$inject = ['$http'];

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();


