import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();
  user1 : User = new User();

  constructor(private userService : RegisterServiceService) { }

  ngOnInit(): void {
  }

  addUser() : void {

    this.userService.registerUser(this.user).subscribe (
      response => {
        if(response == true)
          alert("Registration successful");
        else
          alert("Username already exists");
        this.user=new User();
      }
    );
  }

}
