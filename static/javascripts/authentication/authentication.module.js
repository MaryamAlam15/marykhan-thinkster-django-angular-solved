/**
 * Created by marykhan on 08/05/15.
 */

(function(){

    angular
        .module('thinkster.authentication', [
        'thinkster.authentication.services',
        'thinkster.authentication.controllers'
        ]);

    angular
        .module('thinkster.authentication.controllers', []);

    angular
        .module('thinkster.authentication.services', ['ngCookies']);
})();