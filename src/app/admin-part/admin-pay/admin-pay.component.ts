import { Component } from '@angular/core';
import {ServerService} from '../../main-part/server.service';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-admin-pay',
    templateUrl: './admin-pay.component.html',
    styleUrls: ['./admin-pay.component.css']
})
export class AdminPayComponent {
    Requests: Array<any> = new Array<any>();

    constructor(private serverService: ServerService, private authService: AuthService) {
    }

    getData() {
        this.serverService.getPaymentsPay().subscribe(
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

    changeSecure(id, index) {
        console.log(index);
        this.serverService.changeSecurity(id)
            .subscribe(
                (response) => {
                    if (this.Requests[index]['isSecure'] === true) {
                        this.Requests[index]['isSecure'] = false;
                    } else {
                        this.Requests[index]['isSecure'] = true;
                    }
                    console.log(response);
                },
                (error) =>  console.log(error)
            );
    }
}
