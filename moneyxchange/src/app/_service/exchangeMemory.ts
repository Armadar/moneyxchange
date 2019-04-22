import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable()
export class ExchangeMemory {
    em: string = "exchangesmemory";
    ifExist: boolean;
    time:any[]=[10,'seconds'];

    exist(from: string, to: string) {
        let metaValue = this.getssValue();
        if (metaValue === null) {
            this.ifExist = false;
        }
        else {
            let list = JSON.parse(this.getssValue());
            let exchange = list.find(x => x.from === from && x.to === to);

            if (exchange !== null) {
                if (moment() < moment(exchange.dateRate).add(this.time[0], this.time[1])) {
                    this.ifExist = true;
                } else {
                    this.ifExist = false;
                }
            }
        }

        return this.ifExist;
    }
    storeValue(from: string, to: string, operation: string, rate: number) {

        let newExc =
        {
            "from": from,
            "to": to,
            "operation": operation,
            "rate": rate,
            "dateRate": moment()
        };
        let metaValue = this.getssValue();
        if (metaValue === null) {
            let list = [];
            list.push(newExc);
            this.setssValue(JSON.stringify(list));
        } else {
            let list = JSON.parse(this.getssValue());
            if (!list.find(x => x.from === from && x.to === to)) {
                list.push(newExc);
                this.removessValue();
                this.setssValue(JSON.stringify(list));
            }
            else {
                var exc = list.find(x => x.from === from && x.to === to);
                
                if (moment() > moment(exc.dateRate).add(this.time[0], this.time[1])) {
                    list=[];
                    list.push(newExc);
                    this.removessValue();
                    this.setssValue(JSON.stringify(list));
                }
            }
        }
    }
    getExchange(from: string, to: string, amount: number) {
        let list = JSON.parse(this.getssValue());
        let exchange = list.find(x => x.from === from && x.to === to);

        let operation = exchange.operation;
        let rate = exchange.rate;
        let value = operation === "D" ? amount / rate : amount * rate;

        return [rate, value];
    }
    getssValue() {
        return localStorage.getItem(this.em);
    }
    setssValue(value:string) {
        localStorage.setItem(this.em, value);
    }
    removessValue() {
        localStorage.removeItem(this.em);
    }
}