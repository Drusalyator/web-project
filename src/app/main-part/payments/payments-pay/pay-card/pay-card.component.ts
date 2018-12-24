import {Component, ViewChild} from '@angular/core';
import {UserModule} from '../../../user.module';
import {NgForm} from '@angular/forms';
import {ServerService} from '../../../server.service';

@Component({
    selector: 'app-pay-card',
    templateUrl: './pay-card.component.html',
    styleUrls: ['./pay-card.component.css']
})
export class PayCardComponent {
    public user: UserModule;
    @ViewChild('f') slForm: NgForm;

    constructor(private serverService: ServerService) {
        this.user = new UserModule();
    }

    onSubmit(form: NgForm) {
        const formValue = form.value;
        formValue['isSecure'] = true;
        this.serverService.storePaymentsByCard(formValue)
            .subscribe(
                (responce) => console.log(responce),
                (error) =>  console.log(error)
            );
        form.reset();
    }
}
