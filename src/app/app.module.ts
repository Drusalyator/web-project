import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsNavbarComponent } from './payments/payments-navbar/payments-navbar.component';
import { PaymentsRequestComponent } from './payments/payments-request/payments-request.component';
import {PaymentsPayNavbarComponent} from './payments/payments-pay/payments-pay-navbar/payments-pay-navbar.component';
import {PaymentsPayComponent} from './payments/payments-pay/payments-pay.component';
import {PayCardComponent} from './payments/payments-pay/pay-card/pay-card.component';
import {PayInternetBankComponent} from './payments/payments-pay/pay-internet-bank/pay-internet-bank.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PaymentsComponent,
        PaymentsNavbarComponent,
        PaymentsRequestComponent,
        PaymentsPayNavbarComponent,
        PaymentsPayComponent,
        PayCardComponent,
        PayInternetBankComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
