import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
    selector: 'admin-component',
    templateUrl: './admin.component.html'
})
export class AdminComponent {
    constructor(private _router: Router)  {}
}
