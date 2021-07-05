import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userService  : UserService) { }

  currentUser : User = new User();

  ngOnInit(): void {
    /*this.currentUser.username = "dip";
    this.currentUser.password = "123";
    this.currentUser.role = "staff";*/
    this.currentUser = this.userService.getCurrentUser();
  }

}
