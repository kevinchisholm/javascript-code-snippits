import {BaseRequestOptions, Http, ConnectionBackend, HTTP_PROVIDERS, ResponseOptions, Response} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {provide} from 'angular2/core';
import {MockConnection} from 'angular2/src/http/backends/mock_backend';
import {RouteConfig, RouterOutlet, Location, RouteParams, Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT } from 'angular2/router';
import {RootRouter} from 'angular2/src/router/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';

import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  inject,
  it,
  fakeAsync,
  beforeEachProviders
} from 'angular2/testing';

function runTests () {
    describe('Service: HttpClient', () => {
        beforeEachProviders(() => {
            return [
                Http,
                HTTP_PROVIDERS,
                ConnectionBackend,
                BaseRequestOptions,
                MockBackend,
                provide(Http, {useFactory: (backend, defaultOptions) => {
                    return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }),
                RouteRegistry,
                provide(Location, {useClass: SpyLocation}),
                provide(Location, {useClass: SpyLocation}),
                provide(ROUTER_PRIMARY_COMPONENT, {useValue: MODULE_NAME}),
                provide(Router, {useClass: RootRouter})
            ];
        });

        describe('XXXX', () => {
            it(' should...', inject([
                    Http,
                    MockBackend
                ], (Http, mockBackend) => {

                mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(new ResponseOptions({status: 200})));
                });

                //tests here....
                expect(true).toEqual(true);
            }));
        });
    });
}

//run the tests
runTests();

