import { Component } from '@angular/core';

@Component({
    selector: 'calendar-component',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent {
    config = {
        currentSelect: moment(),
        startWeekOfStartMonth: moment().startOf('month').startOf('isoWeek'),
        getCalendarMonth: function(startWeek: any, month: number) {
            let nextMonth = Number(startWeek.format('M')),
                today = moment(),
                day = moment(startWeek).add(-1, 'days'),
                dateMonth = [];

            while(month >= nextMonth) {
                for (var i = 0; i < 7; i++) {
                    day.add(1,'days');
                    dateMonth.push({
                        day: moment(day),
                        isMonth: (Number(day.format('M')) === month) ? true : false,
                        today: (today.format('DD/MM/YYYY') === day.format('DD/MM/YYYY')) ? true : false
                    });
                }
                nextMonth = Number(day.format('M'));
            }

            return dateMonth;
        }
    }

    constructor()  {
        this.config['calendar'] = this.config.getCalendarMonth(this.config.startWeekOfStartMonth, Number(moment().format('M')));
    }
}
