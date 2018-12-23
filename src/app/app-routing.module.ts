import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsRequestComponent } from './main-part/payments/payments-request/payments-request.component';
import { PayCardComponent } from './main-part/payments/payments-pay/pay-card/pay-card.component';
import { PayInternetBankComponent } from './main-part/payments/payments-pay/pay-internet-bank/pay-internet-bank.component';
import { AuthComponent } from './auth/auth.component';
import { MainPartComponent } from './main-part/main-part.component';
import { PaymentsPayComponent } from './main-part/payments/payments-pay/payments-pay.component';
import { SigninGuard } from './auth/auth-guards/signin-guard.service';
import { AdminComponent } from './admin-part/admin.component';
import { AdminGuard } from './auth/auth-guards/admin-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: AuthComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'main', component: MainPartComponent, children: [
            { path: 'payments-request', component: PaymentsRequestComponent },
            { path: 'payments-pay', component: PaymentsPayComponent, children: [
                    { path: 'by-card', component: PayCardComponent },
                    { path: 'by-internet-bank', component: PayInternetBankComponent }
                ]},
        ], canActivate: [SigninGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
