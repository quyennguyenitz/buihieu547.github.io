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
import { AddTaskComponent } from './inside/addTask.component';
import { CalendarComponent } from './inside/components/calendar.component';
import { TaskComponent } from './inside/components/task.component';

import { MoveTaskDirective } from './inside/directives/moveTask.directive';

import { AuthGuard } from "./auth/service/auth.guard";
import { FakeBackend } from "./service/fake.backend";
import { CreateDataService } from "./service/createData.service";
import { UserService } from "./auth/service/user.service";
import { BehaviorService } from "./service/behavior.service";
import { AcctionTaskService } from './inside/service/actionTask.service';

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
        CalendarComponent,
        AddTaskComponent,
        TaskComponent,
        MoveTaskDirective
    ],
    providers: [
        AuthGuard,
        MockBackend,
        BaseRequestOptions,
        FakeBackend,
        CreateDataService,
        BehaviorService,
        UserService,
        AcctionTaskService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
