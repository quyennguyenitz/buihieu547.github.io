import { Component, ViewContainerRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./service/user.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BehaviorService } from "../service/behavior.service";

@Component({
    selector: "auth-component",
    templateUrl: './auth.component.html',
})

export class AuthComponent {
    signInForm: FormGroup;
    returnUrl: string;

    constructor(
        private _userService: UserService,
        private fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef,
        private _behaviorService : BehaviorService,
    ) {
        this.createForm();
        this.toastr.setRootViewContainerRef(vcr);
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    }

    createForm() {
        this.signInForm = this.fb.group({
            email: ['', Validators.required ],
            pass: ['', Validators.required ]
        });
    }

    signin() {
        if (this.signInForm.valid) {
            this._behaviorService.setLoading(true);
            this._userService.login(this.signInForm.get('email').value, this.signInForm.get('pass').value)
            .finally(() => {
                this._behaviorService.setLoading(false);
            })
            .subscribe(() => {
                this._userService.isVerify = true;
                this._router.navigate([this.returnUrl]);
            }, (err) => {
                this.toastr.error(err, '');
            });
        } else {
            this.toastr.error('Email and password must not blank', '');
        }
    }
}