/**
 * Created by alex on 12/13/15.
 */

(function (angular) {
    "use strict";
    angular.module('gundCI.utils', [])
        .filter('capitalize', capitalizeFilter)
        .filter('secondsToDateTime', secondsToDateTimeFilter);

    /**
     * Capitalize string filter
     * @return {Function}
     */
    function capitalizeFilter() {
        /**
         * @param {String} input Input string
         * @param {Boolean=} onlyFirst Only first letter if true, otherwise each new word
         */
        return function (input, onlyFirst) {
            if (!angular.isString(input)) return input;
            if (onlyFirst) return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
            return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }) : '';
        };
    }

    /**
     * Convert seconds to dateTime object filter
     * @return {Function}
     * @throws 'secondsToDateTime: Invalid seconds'
     */
    function secondsToDateTimeFilter() {
        /**
         * @param {Number} seconds Seconds to convert
         * @return {Date}
         */
        return function (seconds) {
            if (isNaN(parseInt(seconds))) throw 'secondsToDateTime: Invalid seconds';
            return new Date(1970, 0, 1).setSeconds(seconds);
        };
    }

})(angular);