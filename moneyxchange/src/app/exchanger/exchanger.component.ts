import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExchangeService } from '../_service/exchange.service';
import { Exchange } from '../_model/exchange';
import { ExchangeMemory } from '../_service/exchangeMemory';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent implements OnInit {

  value: number;
  rate: number;

  constructor(private exchangeService: ExchangeService, private exchangeMemory: ExchangeMemory) {
  }

  ngOnInit() {
  }

  calculate(form: NgForm) {
    let amount = form.value.amount;
    let from = 'PEN', to = 'USD';
    let exc = new Exchange(from, to, amount);

    var inMemory = this.exchangeMemory.exist(from, to);
    if (inMemory) {
      let oim = this.exchangeMemory.getExchange(from, to, amount);
      this.rate = oim[0];
      this.value = oim[1];
    } else {
      this.exchangeService.getExchange(exc).subscribe(data => {
        this.exchangeMemory.storeValue(from, to, data.operation, data.rate);
        this.rate = data.rate;
        this.value = data.value;
      });
    }
  }
}