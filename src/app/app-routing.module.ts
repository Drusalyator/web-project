import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsRequestComponent } from './payments/payments-request/payments-request.component';
import { PayCardComponent } from './payments/payments-pay/pay-card/pay-card.component';
import { PayInternetBankComponent } from './payments/payments-pay/pay-internet-bank/pay-internet-bank.component';
import { PaymentsPayComponent } from './payments/payments-pay/payments-pay.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'payments-pay/by-card', pathMatch: 'full' },
    { path: 'payments-request', component: PaymentsRequestComponent },
    { path: 'payments-pay', component: PaymentsPayComponent },
    { path: 'payments-pay/by-card', component: PayCardComponent },
    { path: 'payments-pay/by-internet-bank', component: PayInternetBankComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
