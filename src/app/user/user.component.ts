import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from  "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User = new User();
  user1 : User = new User();

  public error : boolean = false;
  retUrl : string = "home";

  constructor(private userService : UserService, 
              private router : Router,
              private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.retUrl = params.get('retUrl');
    });
  }

  login() : void {

    this.userService.login(this.user1).subscribe(
      response =>{
        if(response == true) {
          alert("Login successful");
          if(this.userService.isStaffUser())
            this.router.navigate(["staff-panel"])
          if(this.userService.isAdminUser())
            this.router.navigate(["admin-panel"])
        } 
        else {
          alert("Username or Password does not match");
          this.router.navigate(["login"])
        }
        this.user1=new User();
      }
    )
  }

}
