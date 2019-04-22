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
import { ExchangeMemory } from './_service/exchangeMemory';
import { LoginComponent } from './login/login.component';
import { LoginService } from './_service/login.service';
import { LoginGuard } from './_service/login-guard.service';
import { Security } from './_service/security';
import { EncryptionHelper } from './_service/encryptionHelper';

@NgModule({
  declarations: [
    AppComponent,
    ExchangerComponent,
    HeaderComponent,
    FooterComponent,
    TwoDigitDecimaNumberDirective,
    LoginComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCurrencyModule    
  ],
  providers: [ExchangeService,ExchangeMemory,LoginService,LoginGuard,Security,EncryptionHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
