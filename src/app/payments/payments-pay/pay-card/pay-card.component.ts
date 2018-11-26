import {Component, ViewChild} from '@angular/core';
import {UserModule} from '../../../user.module';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-pay-card',
    templateUrl: './pay-card.component.html',
    styleUrls: ['./pay-card.component.css']
})
export class PayCardComponent {
    public user: UserModule;
    @ViewChild('f') slForm: NgForm;

    constructor() {
        this.user = new UserModule();
    }

    onSubmit(form: NgForm) {
        form.reset();
    }
}
