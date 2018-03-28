import {Injectable} from "@angular/core";

@Injectable()
export class CreateDataService {
    constructor() {}

    createUser() {
        if (!localStorage.getItem('users')) {
            const users = [{
            email: 'buihieu547@gmail.com',
                password: '123456'
            }, {
                email: 'admin@gmail.com',
                password: '123456'
            }];
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}