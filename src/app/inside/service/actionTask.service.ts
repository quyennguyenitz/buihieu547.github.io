import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class AcctionTaskService {
    constructor(private http: Http) {}

    createTask(data:any) {
        data = Object.assign({},data);
        data.estimate = this.handleEstTime(data.estimate);
        return this.http.post('/api/create-task', JSON.stringify(data));
    }

    handleEstTime(time: string) {
        const arrTime = time.split(" ");
        
        return arrTime.map((e) => {
            return this.transformMillisecond(e);
        }).reduce((t,e) => {
            return t + e;
        });
    }

    transformMillisecond(time: string) {
        const unit = time.split(/[0-9]{1,}/g)[1],
              numberMinute = 60*1000,
              number = Number(time.split(/[a-z]/g)[0]);

        let millisecond;

        switch (unit) {
            case 'w' :
                millisecond = numberMinute*60*24*7;
                break;
            case 'd' :
                millisecond = numberMinute*60*24;
                break;
            case 'h' :
                millisecond = numberMinute*60;
                break;
            case 'm' :
                millisecond = numberMinute;
                break;
        }

        return number*millisecond;
    }

    getTask(data: any) {
        return this.http.get('/api/tasks', {params: data});
    }
}