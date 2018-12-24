import {Component, ViewChild, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserModule} from '../../user.module';
import {ServerService} from '../../server.service';

@Component({
    selector: 'app-payments-request',
    templateUrl: './payments-request.component.html',
    styleUrls: ['./payments-request.component.css']
})
export class PaymentsRequestComponent {
    public user: UserModule;
    @ViewChild('f') slForm: NgForm;
    NDS = 'без НДС';

    constructor(private serverService: ServerService) {
        this.user = new UserModule();
    }

    choseNDS(feature: string) {
        this.NDS = feature;
    }

    onSubmit(form: NgForm) {
        const formValue = form.value;
        formValue['nds'] = this.NDS;
        console.log(formValue);
        this.serverService.storePaymentsRequest(formValue)
            .subscribe(
                (response) => console.log(response),
                (error) =>  console.log(error)
            );
    }

    onClear(form: NgForm) {
        form.reset();
    }
}
