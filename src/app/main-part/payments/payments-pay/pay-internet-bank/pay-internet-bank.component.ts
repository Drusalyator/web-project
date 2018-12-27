import {Component, ViewChild} from '@angular/core';
import {UserModule} from '../../../user.module';
import {NgForm} from '@angular/forms';
import {ServerService} from '../../../server.service';
import {saveAs as importedSaveAs} from 'file-saver';
import {AuthService} from '../../../../auth/auth.service';

@Component({
    selector: 'app-pay-internet-bank',
    templateUrl: './pay-internet-bank.component.html',
    styleUrls: ['./pay-internet-bank.component.css']
})
export class PayInternetBankComponent {
    public user: UserModule;
    @ViewChild('f') slForm: NgForm;
    NDS = 'без НДС';

    constructor(private serverService: ServerService, private authService: AuthService) {
        this.user = new UserModule();
    }

    choseNDS(feature: string) {
        this.NDS = feature;
    }

    onSubmit(form: NgForm) {
        const formValue = form.value;
        formValue['nds'] = this.NDS;
        formValue['csrf'] = this.authService.csrfToken;
        this.serverService.getPaymentsToDownload(formValue)
            .subscribe(
                (response) => {console.log(response); this.downloadPayments(response); },
                (error) =>  {console.log('error'); console.log(error); }
            );
    }

    downloadPayments(response) {
        console.log(response);
        const blob = new Blob([response.body], { type: 'text/plain' });
        importedSaveAs(blob, 'payments.txt');
    }

    onClear(form: NgForm) {
        form.reset();
    }
}
