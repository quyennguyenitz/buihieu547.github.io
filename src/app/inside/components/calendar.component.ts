import { Component } from '@angular/core';

@Component({
    selector: 'calendar-component',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent {
    config = {
        isShowCalendar: false,
        isShowMonth: false,
        choseYear: Number(moment().format('YYYY')),
        choseMonth: moment().format('MMMM - YYYY'),
        currentSelect: moment(),
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
        getCalendarMonth: function(currentDate: any) {
            let day = moment(currentDate).startOf('month').startOf('isoWeek').add(-1,'days'),
                isLoop = false,
                today = moment(),
                month = currentDate.format('M'),
                dateMonth = [],
                nextMonth = moment(currentDate).add(1, 'M').format('M');

            while(!isLoop) {
                for (var i = 0; i < 7; i++) {
                    day.add(1,'days');
                    dateMonth.push({
                        day: moment(day),
                        isMonth: (day.format('M') === month) ? true : false,
                        today: (today.format('DD/MM/YYYY') === day.format('DD/MM/YYYY')) ? true : false
                    });
                }

                if (moment(day).add(1,'days').format('M') !== month) {
                    isLoop = true;
                }
            }

            return dateMonth;
        }
    }

    constructor()  {
        this.config['calendar'] = this.config.getCalendarMonth(this.config.currentSelect);
        this.config['listMonth'] = this.config.getNameMonth();
    }

    setMonth(month: number, year: number) {
        let choseMonth = moment(new Date(year + '-' + month));
        this.config.choseMonth = choseMonth.format('MMMM - YYYY');
        this.config['calendar'] = this.config.getCalendarMonth(choseMonth);
    }

    setDay(date: any) {
        this.config.currentSelect = moment(date);
    }

    showCalendar() {
        this.config.isShowCalendar = !this.config.isShowCalendar;
        this.config.choseYear = Number(this.config.currentSelect.format('YYYY'));
    }
}