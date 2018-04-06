import { Component, ViewContainerRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AcctionTaskService } from './service/actionTask.service';
import { BehaviorService } from "../service/behavior.service";
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';

@Component({
    selector: 'add-task-component',
    templateUrl: './addTask.component.html'
})
export class AddTaskComponent {
    addTaskForm: FormGroup;
    patternEst = /^((([1-9]{1,}|([1-9][0-9]{1,}))w)|(([1-9]{1,}|([1-9][0-9]{1,}))d)|(([1-9]{1,}|([1-9][0-9]{1,}))h)|(([1-9]{1,}|([1-9][0-9]{1,}))m)|(([1-9]{1,}|([1-9][0-9]{1,}))w ([1-9]{1,}|([1-9][0-9]{1,}))d)|(([1-9]{1,}|([1-9][0-9]{1,}))w ([1-9]{1,}|([1-9][0-9]{1,}))d ([1-9]{1,}|([1-9][0-9]{1,}))h)|(([1-9]{1,}|([1-9][0-9]{1,}))w ([1-9]{1,}|([1-9][0-9]{1,}))d ([1-9]{1,}|([1-9][0-9]{1,}))h ([1-9]{1,}|([1-9][0-9]{1,}))m)|(([1-9]{1,}|([1-9][0-9]{1,}))w ([1-9]{1,}|([1-9][0-9]{1,}))d ([1-9]{1,}|([1-9][0-9]{1,}))m)|(([1-9]{1,}|([1-9][0-9]{1,}))w ([1-9]{1,}|([1-9][0-9]{1,}))h)|(([1-9]{1,}|([1-9][0-9]{1,}))w ([1-9]{1,}|([1-9][0-9]{1,}))h ([1-9]{1,}|([1-9][0-9]{1,}))m)|(([1-9]{1,}|([1-9][0-9]{1,}))w ([1-9]{1,}|([1-9][0-9]{1,}))m)|(([1-9]{1,}|([1-9][0-9]{1,}))d ([1-9]{1,}|([1-9][0-9]{1,}))h)|(([1-9]{1,}|([1-9][0-9]{1,}))d ([1-9]{1,}|([1-9][0-9]{1,}))h ([1-9]{1,}|([1-9][0-9]{1,}))m)|(([1-9]{1,}|([1-9][0-9]{1,}))d ([1-9]{1,}|([1-9][0-9]{1,}))m)|(([1-9]{1,}|([1-9][0-9]{1,}))h ([1-9]{1,}|([1-9][0-9]{1,}))m))$/;

    constructor(
        private fb: FormBuilder,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef,
        private _behaviorService : BehaviorService,
        private _actionTaskService: AcctionTaskService
    )  {
        this.createForm();
        this.toastr.setRootViewContainerRef(vcr);
    }

    createForm() {
        this.addTaskForm = this.fb.group({
            title: ['', Validators.required ],
            description: ['', Validators.required ],
            estimate: ['', Validators.pattern(this.patternEst) ]
        });
    }

    createTask() {
        if (this.addTaskForm.valid) {
            this._behaviorService.setLoading(true);
            this._actionTaskService.createTask(this.addTaskForm.value)
            .finally(() => {
                this._behaviorService.setLoading(false);
            })
            .subscribe((res) => {
                this.addTaskForm.reset();
                this.toastr.success(res.json().messages[0], '');
            });
        } else {
            this.toastr.error('All fields must not blank and estimate must correct format', '');
        }
    }
}
