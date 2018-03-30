import { Component } from '@angular/core';

@Component({
    selector: 'calendar-component',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent {
    constructor()  {
        console.log(moment);   
    }
}
