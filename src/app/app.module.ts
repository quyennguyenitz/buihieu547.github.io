import { NgModule } from '@angular/core';
import { BaseRequestOptions, HttpModule } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { BrowserModule }    from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './inside/admin.component';
import { CalendarComponent } from './inside/components/calendar.component';

import { AuthGuard } from "./auth/service/auth.guard";
import { FakeBackend } from "./service/fake.backend";
import { CreateDataService } from "./service/createData.service";
import { UserService } from "./auth/service/user.service";
import { BehaviorService } from "./service/behavior.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRouteModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        AdminComponent,
        CalendarComponent
    ],
    providers: [
        AuthGuard,
        MockBackend,
        BaseRequestOptions,
        FakeBackend,
        CreateDataService,
        BehaviorService,
        UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
