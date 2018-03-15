import {BaseRequestOptions, Http, RequestMethod, RequestOptions, Response, ResponseOptions, XHRBackend} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";

export function mockBackEndFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                let params = JSON.parse(connection.request.getBody());
                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: {}
                })));
                // connection.mockError(new Error('Email or password is incorrect'));
            }

            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });
        }, 500);
    });

    return new Http(backend, options);
}

export let FakeBackend = {
    provide: Http,
    deps: [MockBackend, BaseRequestOptions, XHRBackend],
    useFactory: mockBackEndFactory
};