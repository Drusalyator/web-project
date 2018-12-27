import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {ServerService} from './main-part/server.service';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

    constructor(private router: Router, private serverService: ServerService, private cookieService: CookieService,
                private authService: AuthService) {}

    ngOnInit() {
        if (this.cookieService.check('test')) {
            this.serverService.checkCookies(this.cookieService.get('test')).subscribe(
                (responce) => {
                    console.log(responce);
                    if (responce.body['isCorrect']) {
                        this.authService.typeOfUser = this.authService.getUserType();
                        const userType = this.authService.typeOfUser;
                        if (userType === 'admn') {
                            this.router.navigate(['/admin']);
                            this.serverService.getCSRFToken({'userType': 'admin'}).subscribe(
                                (responce2) => {
                                    this.authService.csrfToken = responce2.body['token'];
                                },
                                (error2) => { console.log(error2); }
                            );
                        } else if (userType === 'user') {
                            this.router.navigate(['/main']);
                            this.serverService.getCSRFToken({'userType': 'user'}).subscribe(
                                (responce2) => {
                                    this.authService.csrfToken = responce2.body['token'];
                                },
                                (error2) => { console.log(error2); }
                            );
                        }
                    } else {
                        this.authService.typeOfUser = 'guest';
                        this.router.navigate(['/login']);
                        this.serverService.getCSRFToken({'userType': 'guest'}).subscribe(
                            (responce2) => {
                                this.authService.csrfToken = responce2.body['token'];
                            },
                            (error2) => { console.log(error2); }
                        );
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            this.authService.typeOfUser = 'guest';
            this.router.navigate(['/login']);
        }
    }
}
