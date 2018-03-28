import {Injectable} from "@angular/core";

@Injectable()
export class BehaviorService {
    config = {
        loading: $('[data-loading]')
    };

    constructor() {}

    setLoading(is: boolean) {
        is ? this.config['loading'].removeClass('hide') : this.config['loading'].addClass('hide');
    }
}