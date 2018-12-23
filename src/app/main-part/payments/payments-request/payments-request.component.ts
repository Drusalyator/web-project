import {Component, ViewChild, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserModule} from '../../user.module';

@Component({
    selector: 'app-payments-request',
    templateUrl: './payments-request.component.html',
    styleUrls: ['./payments-request.component.css']
})
export class PaymentsRequestComponent implements OnInit {
    public user: UserModule;
    @ViewChild('f') slForm: NgForm;
    NDS = 'без НДС';

    ngOnInit(): void {
        $(function() {
            // @ts-ignore
            $('#phone_n').mask('+7 999 999-99-99');
        });
    }

    constructor() {
        this.user = new UserModule();
    }

    choseNDS(feature: string) {
        this.NDS = feature;
    }

    onSubmit(form: NgForm) {
        form.reset();
    }

    onClear(form: NgForm) {
        form.reset();
    }
}
