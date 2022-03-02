import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginService } from 'src/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizerGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate() {
    console.log(this.loginService.isAuthenticated());
    
    if (this.loginService.isAuthenticated()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
