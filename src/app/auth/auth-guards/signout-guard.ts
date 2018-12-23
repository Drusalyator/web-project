import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth.service';

@Injectable()
export class SignoutGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isAuthenticated()) {
            return true;
        } else if (this.authService.isAdmin()) {
            this.router.navigate(['admin']);
        } else {
            this.router.navigate(['main']);
        }
    }
}
