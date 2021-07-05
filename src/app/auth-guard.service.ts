import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router : Router, 
              private userService : UserService) { }

  canActivate(route : ActivatedRouteSnapshot, snap : RouterStateSnapshot) {

    if(! this.userService.isUserLoggedIn()) {
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
}
