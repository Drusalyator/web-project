import { Component } from '@angular/core';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.css']
})

export class PaymentsComponent {
    loadedFeature = '/main/payments-pay';

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }
}

