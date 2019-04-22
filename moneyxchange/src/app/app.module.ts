import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangerComponent } from './exchanger/exchanger.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgxCurrencyModule } from "ngx-currency";
import { TwoDigitDecimaNumberDirective } from './_directive/decimaldirective';

import { ExchangeService } from './_service/exchange.service';

@NgModule({
  declarations: [
    AppComponent,
    ExchangerComponent,
    HeaderComponent,
    FooterComponent,
    TwoDigitDecimaNumberDirective
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCurrencyModule    
  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
