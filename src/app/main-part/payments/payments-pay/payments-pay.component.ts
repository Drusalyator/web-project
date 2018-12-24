import {Component} from '@angular/core';

@Component({
    selector: 'app-payments-pay',
    templateUrl: './payments-pay.component.html',
    styleUrls: ['./payments-pay.component.css']
})

export class PaymentsPayComponent {
    loadedsFeature = 'main/payments-pay/by-card';

    onNavigates(feature: string) {
        this.loadedsFeature = feature;
    }

}
