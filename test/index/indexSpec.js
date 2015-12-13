'use strict';

describe('gundCI.index module', function () {

    var STATUS_PENDING = 'pending'
        , STATUS_RUNNING = 'running'
        , STATUS_PASSED = 'passed'
        , STATUS_FAILED = 'failed';
    var MOCK_DATA = {key: 'value'};

    beforeEach(module('gundCI.index'));

    describe('index controller', function () {
        var scope, indexCtrl, $httpBackend, verifyHTTP;

        beforeEach(inject(function ($injector) {
            verifyHTTP = false;
            $httpBackend = $injector.get('$httpBackend');
            scope = $injector.get('$rootScope').$new();

            var $controller = $injector.get('$controller');
            indexCtrl =function () {
                return $controller('IndexController', {$scope: scope});
            };
        }));

        afterEach(function () {
            if (verifyHTTP) {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            }
        });

        it('should fetch data when init', function () {
            verifyHTTP = true;
            $httpBackend.expectGET('data/tasks.json').respond(angular.toJson(MOCK_DATA));
            indexCtrl();
            expect(scope.isLoading).toBeTruthy();
            $httpBackend.flush();
            expect(scope.isLoading).toBeFalsy();
            expect(scope.taskList).toEqual(MOCK_DATA);
        });

        it('should check statuses', function () {
            indexCtrl();
            expect(scope.isPending(STATUS_PENDING)).toBeTruthy();
            expect(scope.isRunning(STATUS_RUNNING)).toBeTruthy();
            expect(scope.isPassed(STATUS_PASSED)).toBeTruthy();
            expect(scope.isFailed(STATUS_FAILED)).toBeTruthy();
        });

        it('should check percentage', function () {
            indexCtrl();
            expect(scope.isEmpty('')).toBeTruthy();
            expect(scope.isZero('0')).toBeTruthy();
            expect(scope.isDone('100')).toBeTruthy();
        });

        it('should get right icon', function () {
            indexCtrl();
            expect(scope.getIconFor(STATUS_PENDING)).toBe('flaticon-more7');
            expect(scope.getIconFor(STATUS_RUNNING)).toBe('flaticon-refresh36');
            expect(scope.getIconFor(STATUS_PASSED)).toBe('flaticon-circle134');
            expect(scope.getIconFor(STATUS_PASSED, '1')).toBe('flaticon-checked21');
            expect(scope.getIconFor(STATUS_FAILED)).toBe('flaticon-delete21');
            expect(scope.getIconFor(STATUS_FAILED, '1')).toBe('flaticon-exclamation9');
            expect(scope.getIconFor(STATUS_FAILED, '100')).toBe('flaticon-checked21');
        });

        it('should return task percent', function () {
            indexCtrl();
            expect(scope.getTaskPercent('15')).toBe('calc(15% + 2px)');
        })

    });
});