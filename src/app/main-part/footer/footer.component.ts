import {Component} from '@angular/core';
import {UserModule} from '../user.module';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent {
    public user: UserModule;

    constructor(private authService: AuthService) {
        this.user = new UserModule();
    }
}
