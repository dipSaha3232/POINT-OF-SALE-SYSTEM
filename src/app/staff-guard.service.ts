import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StaffGuardService implements CanActivate{

  constructor(private router : Router, 
              private userService : UserService) { }

  canActivate(route : ActivatedRouteSnapshot, snap : RouterStateSnapshot) {

      if(! this.userService.isStaffUser()) {
         this.router.navigate(["login"], {queryParams : {retUrl : route.url}});
         return false;
      }
            
      return true;
  }
}