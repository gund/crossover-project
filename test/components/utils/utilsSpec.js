'use strict';

describe('gundCI.utils module', function () {
    beforeEach(module('gundCI.utils'));

    describe('capitalize filter', function () {

        it('should capitalize first letters', inject(function (capitalizeFilter) {
            expect(capitalizeFilter('this text')).toEqual('This Text');
        }));

        it('should capitalize first letter in string', inject(function (capitalizeFilter) {
            expect(capitalizeFilter('this text', true)).toEqual('This text');
        }));

        it('should return same value if not string', inject(function (capitalizeFilter) {
            expect(capitalizeFilter(123)).toBe(123);
        }));

        it('should return empty string if empty string given', inject(function (capitalizeFilter) {
            expect(capitalizeFilter('')).toBe('');
        }));

    });

    describe('secondsToDateTime filter', function () {

        it('should filter second to datetime', inject(function (secondsToDateTimeFilter, dateFilter) {
            expect(dateFilter(secondsToDateTimeFilter(60), 'mm:ss')).toBe('01:00');
            expect(dateFilter(secondsToDateTimeFilter('60'), 'mm:ss')).toBe('01:00');
        }));

        it('should throw error if not valid number', inject(function (secondsToDateTimeFilter, dateFilter) {
            expect(function () {
                dateFilter(secondsToDateTimeFilter('foo bar'), 'mm:ss');
            }).toThrow('secondsToDateTime: Invalid seconds');
        }));

    });
});
