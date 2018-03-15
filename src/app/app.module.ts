import { NgModule } from '@angular/core';
import { BaseRequestOptions, HttpModule } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './inside/admin.component';

import { AuthGuard } from "./auth/service/auth.guard";
import { FakeBackend } from "./service/fake.backend";
import { UserService } from "./auth/service/user.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRouteModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        AdminComponent
    ],
    providers: [
        AuthGuard,
        MockBackend,
        BaseRequestOptions,
        FakeBackend,
        UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
