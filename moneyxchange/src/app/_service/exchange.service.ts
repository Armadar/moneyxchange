import { Injectable } from '@angular/core';
import { ExchangeMicroService } from './var.constant';
import { HttpClient } from '@angular/common/http';
import { Exchange } from './../_model/exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  url: string = `${ExchangeMicroService}/exchanges`;

  constructor(private http: HttpClient) { }

  getExchange(exchange: Exchange) {
    console.log(exchange.amount);
    return this.http.get<Exchange>(`${this.url}/${exchange.from}/${exchange.to}/${exchange.amount}`,
    {headers:null});
  }
}