/**
 * Created by marykhan on 08/05/15.
 */

(function(){

    angular
        .module('thinkster.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider){
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
})();