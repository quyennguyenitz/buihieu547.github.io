import { Directive, ElementRef, HostListener, Renderer, OnInit, Output, EventEmitter } from '@angular/core';
import { AcctionTaskService } from '../service/actionTask.service';

@Directive({
  selector: '[moveTask]'
})
export class MoveTaskDirective implements OnInit {
    drag = false;
    relX = 0;
    relY = 0;
    $el: any;
    posTasks: any[];

    @Output() changeStatus = new EventEmitter<any>();

    constructor(
        private el: ElementRef, 
        private _renderer: Renderer,
        private _actionTaskService: AcctionTaskService
    ) {}

    ngOnInit() {
        let win = $(window);

        this.$el = $(this.el.nativeElement);
        this.posTasks = this._actionTaskService.getPositionTasks();
        win.on('mousemove.moveTask', this.onMouseMove.bind(this));
        win.on('mouseup.moveTask', this.onMouseUp.bind(this))
    }

    @HostListener('mousedown', ['$event']) onMouseDown(e: any) {
        let pos = this.$el.offset(),
            parent = this.$el.parent();

        this.relX = e.pageX - pos.left;
        this.relY = e.pageY - pos.top;
        this.drag = true;
        
        parent.width(this.el.nativeElement.clientWidth + 20);
        parent.height(this.el.nativeElement.clientHeight + 20);
        parent.css('display', 'block');
        this._renderer.setElementStyle(this.el.nativeElement, 'width', this.el.nativeElement.clientWidth + 'px');
        this._renderer.setElementStyle(this.el.nativeElement, 'position', 'absolute');
    }

    onMouseMove(e: any) {
        if (this.drag) {
            this._renderer.setElementStyle(this.el.nativeElement, 'left', (e.pageX - this.relX) + 'px');
            this._renderer.setElementStyle(this.el.nativeElement, 'top', (e.pageY - this.relY) + 'px');
        }
    }

    onMouseUp(e: any) {
        let pos = this.$el.offset(),
            typeTask: string = '';

        for (let i = 0, length = this.posTasks.length; i < length; i++) {
            if (
                pos.left >= this.posTasks[i]['left'] &&
                pos.left <= this.posTasks[i]['right'] &&
                pos.top >= this.posTasks[i]['top'] &&
                pos.top <= this.posTasks[i]['bot']
            ) {
                typeTask = this.posTasks[i]['type'];
                break;
            }
        }

        this.drag = false;
        
        if (typeTask != this.$el.data().type && typeTask) {
            this.changeStatus.emit({
                id: this.$el.data().id, 
                type: typeTask, 
                oldType: this.$el.data().type
            });
        } else {
            this.el.nativeElement.removeAttribute("style");
            this.$el.parent()[0].removeAttribute("style");
        }
    }
}