import {Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _router: Router, private _userService: UserService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this._userService.isVerify) {
            return true;
        }

        return this._userService.verify().map(
            data => {
                if (data !== null) {
                    this._userService.isVerify = true;
                    return true;
                }
                this._router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
                return false;
            },
            () => {
                this._router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
                return false;
            });
    }
}