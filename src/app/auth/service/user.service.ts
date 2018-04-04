import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    isVerify = false;

    verify() {
        return this.http.get('/api/verify', this.jwt()).map((response: Response) => response.json());
    }

    login(email: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({email: email, password: password}))
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            }, () => {});
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({headers: headers});
        }
    }
}