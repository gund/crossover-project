'use strict';

describe('gundCI.utils module', function() {
    beforeEach(module('gundCI.utils'));

    describe('capitalize filter', function() {

        it('should capitalize first letters', inject(function(capitalizeFilter) {
            expect(capitalizeFilter('this text')).toEqual('This Text');
        }));

        it('should capitalize first letter in string', inject(function(capitalizeFilter) {
            expect(capitalizeFilter('this text', true)).toEqual('This text');
        }));

    });
});
