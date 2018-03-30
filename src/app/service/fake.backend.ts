import {BaseRequestOptions, Http, RequestMethod, RequestOptions, Response, ResponseOptions, XHRBackend} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";

export function mockBackEndFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    let token: string = 'fake-jwt-token';
    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                let params = JSON.parse(connection.request.getBody());
                let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
                let filteredUsers = users.filter(user => {
                    return user.email === params.email && user.password === params.password;
                });
                if (filteredUsers.length) {
                    let user = filteredUsers[0];
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            email: user.email,
                            token: token
                        }
                    })));
                } else {
                    connection.mockError(new Error('Email or password is incorrect'));
                }
                return;
            }

            if (connection.request.url.endsWith('/api/verify') && connection.request.method === RequestMethod.Get) {
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new Response(new ResponseOptions({status: 200, body: {status: 'ok'}})));
                } else {
                    connection.mockRespond(new Response(new ResponseOptions({status: 401})));
                }

                return;
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