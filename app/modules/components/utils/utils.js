/**
 * Created by alex on 12/13/15.
 */

(function(angular){
    "use strict";
    angular.module('gundCI.utils', [])

        .filter('capitalize', function () {
            return function (input, onlyFirst) {
                if (!angular.isString(input)) return input;
                if (onlyFirst) return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
                return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }) : '';
            }
        })

})(angular);