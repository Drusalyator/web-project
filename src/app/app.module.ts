import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './main-part/header/header.component';
import { PaymentsComponent } from './main-part/payments/payments.component';
import { PaymentsNavbarComponent } from './main-part/payments/payments-navbar/payments-navbar.component';
import { PaymentsRequestComponent } from './main-part/payments/payments-request/payments-request.component';
import { PaymentsPayNavbarComponent } from './main-part/payments/payments-pay/payments-pay-navbar/payments-pay-navbar.component';
import { PaymentsPayComponent } from './main-part/payments/payments-pay/payments-pay.component';
import { PayCardComponent } from './main-part/payments/payments-pay/pay-card/pay-card.component';
import { PayInternetBankComponent } from './main-part/payments/payments-pay/pay-internet-bank/pay-internet-bank.component';
import { MainPartComponent} from './main-part/main-part.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SigninGuard } from './auth/auth-guards/signin-guard.service';
import { AdminComponent } from './admin-part/admin.component';
import { FooterComponent } from './main-part/footer/footer.component';
import { AdminGuard } from './auth/auth-guards/admin-guard.service';
import { ServerService } from './main-part/server.service';
import {AdminNavbarComponent} from './admin-part/admin-navbar/admin-navbar.component';
import {AdminPayComponent} from './admin-part/admin-pay/admin-pay.component';
import {AdminRequestComponent} from './admin-part/admin-request/admin-request.component';

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
        PayInternetBankComponent,
        MainPartComponent,
        SigninComponent,
        AuthComponent,
        AdminComponent,
        FooterComponent,
        AdminNavbarComponent,
        AdminPayComponent,
        AdminRequestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [AuthService, SigninGuard, AdminGuard, ServerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
