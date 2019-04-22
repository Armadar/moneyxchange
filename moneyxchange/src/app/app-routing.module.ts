import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExchangerComponent } from './exchanger/exchanger.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './_service/login-guard.service';


const appRoutes: Routes = [
  {
    path: 'exchanger', component: ExchangerComponent, canActivate: [LoginGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Begin
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
