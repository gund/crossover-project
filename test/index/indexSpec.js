'use strict';

describe('gundCI.index module', function() {

    var STATUS_PENDING = 'pending'
        , STATUS_RUNNING = 'running'
        , STATUS_PASSED = 'passed'
        , STATUS_FAILED = 'failed';

    beforeEach(module('gundCI.index'));

    describe('index controller', function(){
        var scope, indexCtrl, http;

        beforeEach(inject(function($rootScope, $http, $controller) {
            scope = $rootScope.$new();
            http = $http;
            indexCtrl = $controller('IndexController', {$scope: scope, $http: http});
        }));

        it('should check statuses', function() {
            expect(scope.isPending(STATUS_PENDING)).toBeTruthy();
            expect(scope.isRunning(STATUS_RUNNING)).toBeTruthy();
            expect(scope.isPassed(STATUS_PASSED)).toBeTruthy();
            expect(scope.isFailed(STATUS_FAILED)).toBeTruthy();
        });

        it('should check percentage', function () {
            expect(scope.isEmpty('')).toBeTruthy();
            expect(scope.isZero('0')).toBeTruthy();
            expect(scope.isDone('100')).toBeTruthy();
        });

        it('should get right icon', function () {
            expect(scope.getIconFor(STATUS_PENDING)).toBe('flaticon-more7');
            expect(scope.getIconFor(STATUS_RUNNING)).toBe('flaticon-refresh36');
            expect(scope.getIconFor(STATUS_PASSED)).toBe('flaticon-circle134');
            expect(scope.getIconFor(STATUS_PASSED, '1')).toBe('flaticon-checked21');
            expect(scope.getIconFor(STATUS_FAILED)).toBe('flaticon-delete21');
            expect(scope.getIconFor(STATUS_FAILED, '1')).toBe('flaticon-exclamation9');
            expect(scope.getIconFor(STATUS_FAILED, '100')).toBe('flaticon-checked21');
        });

        it('should return task percent', function () {
            expect(scope.getTaskPercent('15')).toBe('calc(15% + 2px)');
        })

    });
});