/**
 * Created by marykhan on 15/05/15.
 */

(function ($, _) {

    angular
        .module('thinkster.utils.services')
        .factory('Snackbar', Snackbar);


    function Snackbar() {

        var snackbar = {
            error: error,
            show: show
        };

        return snackbar;


        function _snackbar(content, options) {
            options = _.extends({timeout: 3000}, options);
            options.content = content;

            return options;

        }

/////////////////////////////////////////////////////////////////////////////

        function error(content, options) {
            _snackbar("Error: " + content, options);
        }

        function show(content, options) {
            _snackbar(content, options);
        }
    }
})($, _);