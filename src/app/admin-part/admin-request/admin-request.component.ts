import { Component } from '@angular/core';
import {ServerService} from '../../main-part/server.service';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-admin-request',
    templateUrl: './admin-request.component.html',
    styleUrls: ['./admin-request.component.css']
})
export class AdminRequestComponent {

    Requests: Array<any> = new Array<any>();

    constructor(private serverService: ServerService, private authService: AuthService) {
    }

    getData() {
        this.serverService.getPaymentsRequests().subscribe(
            (response) => {
                console.log(response);
                this.makeArray(response);
            },
            (error) => console.log(error)
        );
    }

    makeArray(response) {
        const array: Array<any> = new Array<any>();
        Object.keys(response.body).forEach(key => {
            array.push(response.body[key]);
        });
        if (this.Requests.length !== array.length) {
            this.Requests = new Array<any>();
            this.Requests.push(...array);
        }
    }
}
