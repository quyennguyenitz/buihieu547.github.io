import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CreateDataService } from "./service/createData.service";
import { BehaviorService } from "./service/behavior.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private _behaviorService : BehaviorService,
        private _createDataService: CreateDataService,
        private _router: Router
    ) {

    }

    ngOnInit() {
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
               this._behaviorService.setLoading(true);
            }
            if (route instanceof NavigationEnd) {
                this._behaviorService.setLoading(false);
            }
        });
        this._createDataService.createUser();
    }
}
