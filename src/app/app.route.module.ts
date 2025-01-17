import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './inside/admin.component';
import { AddTaskComponent } from './inside/addTask.component';
import { AuthGuard } from "./auth/service/auth.guard";

const routes: Routes = [
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: 'add-task',
        component: AddTaskComponent,
        "canActivate": [AuthGuard]
    },
    {
        path: '',
        component: AdminComponent,
        "canActivate": [AuthGuard]
    },
    {
        path: '', 
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule { }