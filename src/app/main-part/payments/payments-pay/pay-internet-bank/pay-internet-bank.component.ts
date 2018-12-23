import {Component, ViewChild} from '@angular/core';
import {UserModule} from '../../../user.module';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-pay-internet-bank',
    templateUrl: './pay-internet-bank.component.html',
    styleUrls: ['./pay-internet-bank.component.css']
})
export class PayInternetBankComponent {
    public user: UserModule;
    @ViewChild('f') slForm: NgForm;
    NDS = 'без НДС';

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
