import { Component } from '@angular/core';

@Component({
    selector: 'calendar-component',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent {
    config = {
        choseYear: Number(moment().format('YYYY')),
        choseMonth: moment().format('MMMM - YYYY'),
        currentSelect: moment(),
        startWeekOfStartMonth: moment().startOf('month').startOf('isoWeek'),
        getNameMonth: function() {
            let month = moment('1970-01'),
                i = 0,
                listMonth = [month.format('MMMM')];

            while(i < 11) {
                month.add(1, 'M');
                listMonth.push(month.format('MMMM'));
                i++;
            }

            return listMonth;
        },
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
                nextMonth = Number(moment(day).add(1, 'days').format('M'));
                (month === 12 && nextMonth === 1) && (nextMonth = 13);
            }

            return dateMonth;
        }
    }

    constructor()  {
        this.config['calendar'] = this.config.getCalendarMonth(this.config.startWeekOfStartMonth, Number(moment().format('M')));
        this.config['listMonth'] = this.config.getNameMonth();
    }

    setMonth(month: number, year: number) {
        let choseMonth = moment(new Date(year + '-' + month));
        this.config.choseMonth = choseMonth.format('MMMM - YYYY');
        this.config['calendar'] = this.config.getCalendarMonth(choseMonth.startOf('month').startOf('isoWeek'), month);
    }

    setDay(date: any) {
        this.config.currentSelect = moment(date);
    }

    showCalendar() {
        this.config.choseYear = Number(this.config.currentSelect.format('YYYY'));
    }
}