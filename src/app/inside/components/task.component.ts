import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AcctionTaskService } from '../service/actionTask.service';
import { BehaviorService } from "../../service/behavior.service";

@Component({
    selector: 'task-component',
    templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
	@Input() task:any;
    @Input() type:any;
    @Output() changeStatusContinue = new EventEmitter<any>();

    constructor(
        private _actionTaskService: AcctionTaskService,
        private _behaviorService : BehaviorService
    )  {}

    ngOnInit() {
        
    }

    changeStatus(e: any) {
        this.changeStatusContinue.emit(e);
    }
}