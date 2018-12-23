import {Component} from '@angular/core';
import {UserModule} from '../user.module';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent {
    public user: UserModule;

    constructor() {
        this.user = new UserModule();
    }
}
