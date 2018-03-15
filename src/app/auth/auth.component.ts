import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import { UserService } from "./service/user.service";

@Component({
    selector: "auth-component",
    templateUrl: './auth.component.html',
})

export class AuthComponent {
    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _userService: UserService
    ) {}

    signin() {
        this._userService.login('aa', 'aa').subscribe((data) => {
            console.log(data);
        });
    }
}