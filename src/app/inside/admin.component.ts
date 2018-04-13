import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'admin-component',
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
    isMenu: boolean;
    listTasks = {};

    constructor()  {}

    ngOnInit() {
        this.listTasks['todo'] = [];
        this.listTasks['progress'] = [];
        this.listTasks['done'] = [];
        this.listTasks['testing'] = [];
        this.listTasks['production'] = [];
    }

    filterTask(tasks: any) {
        this.listTasks['todo'] = tasks.filter((e:any) => { return e.status === 0 });
        this.listTasks['progress'] = tasks.filter((e:any) => { return e.status === 1 });
        this.listTasks['done'] = tasks.filter((e:any) => { return e.status === 2 });
        this.listTasks['testing'] = tasks.filter((e:any) => { return e.status === 3 });
        this.listTasks['production'] = tasks.filter((e:any) => { return e.status === 4 });
    }

    sendTasks(data: any) {
        this.filterTask(data);
    }

    changeStatusContinue(data: any) {
        let oldTask = this.listTasks[data.oldType];

        for (let i = 0, len = oldTask.length; i < len; i++) {
            if (data.id === oldTask[i].taskId) {
                this.listTasks[data.type] = this.listTasks[data.type].concat(oldTask.splice(i,1));
                break;
            }
        }
    }
}
