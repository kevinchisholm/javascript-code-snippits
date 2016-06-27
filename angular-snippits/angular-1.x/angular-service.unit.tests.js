describe('SERVICE_NAME', function (){
  'use strict';

    var $httpBackend =  null,
        $http = null,
        rootScope,
        testData = {};

    function runTests(){
        //inject the CustomerSelfServiceApp module
        beforeEach( function() {
            module('CustomerSelfServiceApp');
        });

        //inject the required sub-modules
        beforeEach(inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            $http = $injector.get('$http');
        }));

        //setup the expected $http calls
        beforeEach(function() {
            $httpBackend.expectGET('XXXXXX').respond(200, {});
            $httpBackend.whenGET('XXXXXX').respond(200, '');
            $httpBackend.whenGET('XXXXXX').respond(200, '');
        });

        //test METHOD_NAME_1
        describe('METHOD_NAME_1.', function () {
            beforeEach(function() {
                //put pre-test tasks here
            });

            it(' should...', function() {
                expect(true).toEqual(true);
            });

            it(' should...', function() {
                expect(true).toEqual(true);
            });
        });

        //test METHOD_NAME_2
        describe('METHOD_NAME_2.', function () {
            beforeEach(function() {
                //put pre-test tasks here
            });

            it(' should...', function() {
                expect(true).toEqual(true);
            });

            it(' should...', function() {
                expect(true).toEqual(true);
            });
        });
 
         //test METHOD_NAME_3
        describe('METHOD_NAME_3.', function () {
            beforeEach(function() {
                //put pre-test tasks here
            });

            it(' should...', function() {
                expect(true).toEqual(true);
            });

            it(' should...', function() {
                expect(true).toEqual(true);
            });
        });
    }

    //keep this stuff at the bottom of the file, in order to make things more readable
    testData.moreTestData = {
        foo: 'bar'
    }

    //run the tests
    runTests();
});