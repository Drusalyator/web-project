import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'app-main-part',
    templateUrl: './main-part.component.html',
    styleUrls: ['./main-part.component.css']
})

export class MainPartComponent implements  OnInit {

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.router.navigate(['main/payments-pay/by-card']);
    }
}
