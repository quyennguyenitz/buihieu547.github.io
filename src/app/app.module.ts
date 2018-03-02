import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './inside/admin.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRouteModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        AdminComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
