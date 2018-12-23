import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-payments-pay',
    templateUrl: './payments-pay.component.html',
    styleUrls: ['./payments-pay.component.css']
})

export class PaymentsPayComponent implements OnInit{
    loadedsFeature = 'main/payments-pay/by-card';

    onNavigates(feature: string) {
        this.loadedsFeature = feature;
    }

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['main/payments-pay/by-card']);
    }
}
