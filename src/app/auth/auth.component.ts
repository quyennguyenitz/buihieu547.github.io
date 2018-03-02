import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "auth-component",
    templateUrl: './auth.component.html',
})

export class AuthComponent {
    constructor(
        private _router: Router,
        private _route: ActivatedRoute
    ) {}
}