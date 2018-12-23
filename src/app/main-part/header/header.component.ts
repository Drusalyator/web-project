import { Component } from '@angular/core';
import { UserModule } from '../user.module';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    public user: UserModule;

    constructor() {
        this.user = new UserModule();
    }
}
