import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExchangeService } from '../_service/exchange.service';
import { Exchange } from '../_model/exchange';
@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent implements OnInit {

  value: number;
  rate: number;

  constructor(private exchangeService: ExchangeService) {
  }

  ngOnInit() {
  }

  calculate(form: NgForm) {
    let amount = form.value.amount;
    let exc = new Exchange('PEN', 'USD', amount);

    this.exchangeService.getExchange(exc).subscribe(data => {
      this.rate = data.rate;
      this.value = data.value;
    });
  }
}