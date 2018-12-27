import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {ServerService} from '../main-part/server.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthService {
    typeOfUser = 'guest';
    incorrect: boolean;
    csrfToken: string;

    constructor(private router: Router, private serverService: ServerService, private cookieService: CookieService) {}

    signinUser(email: string, password: string) {
        this.serverService.webAuth({email, password}).subscribe(
            (responce) => {
                    console.log(responce);
                    const isCorrect = responce.body['isCorrect'];
                    if (isCorrect) {
                        this.cookieService.set('test', responce.headers.get('X-Set-Authorization'))
                        this.typeOfUser = responce.headers.get('X-Set-Authorization')
                            .slice(-4, responce.headers.get('X-Set-Authorization').length);
                        if (this.typeOfUser === 'admn') {
                            this.router.navigate(['admin']);
                            this.serverService.getCSRFToken({'userType': 'admin'}).subscribe(
                                (responce2) => {this.csrfToken = responce2.body['token']},
                                (error2) => { console.log(error2); }
                            );
                        } else if (this.typeOfUser === 'user') {
                            this.router.navigate(['main']);
                            this.serverService.getCSRFToken({'userType': 'user'}).subscribe(
                                (responce2) => this.csrfToken = responce2.body['token'],
                                (error2) => { console.log(error2); }
                            );
                        }
                        this.incorrect = false;
                    } else {
                        this.incorrect = true;
                        this.serverService.getCSRFToken({'userType': 'guest'}).subscribe(
                            (responce2) => this.csrfToken = responce2.body['token'],
                            (error2) => { console.log(error2); }
                        );
                    }
                },
            (error) => {
                    console.log(error);
                }
        );
        console.log(this.getUserType());
    }

    getUserType() {
        return this.cookieService.get('test').slice(-4, this.cookieService.get('test').length);
    }

    logout() {
        this.cookieService.delete('test');
        this.router.navigate(['login']);
        this.typeOfUser = 'guest';
    }
}
