import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url="https://localhost:5001/api/user/";

  private isLoggedIn : boolean;
  private currentUser : User; 

  constructor(private http : HttpClient) {
    this.isLoggedIn = false;
   }

  isUserLoggedIn() : boolean {
    return this.isLoggedIn;
  }

  public login (user : User) : Observable<boolean> {
    //this.isLoggedIn=true;
    //return of(this.isLoggedIn);

    this.http.post<boolean>(this.url + "login",user).subscribe(response=>{
      this.isLoggedIn=response;
      if(this.isLoggedIn) {
        this.searchUser(user.username).subscribe(
          response1 => {
            this.currentUser = response1;
        })
      }
    })

    return this.http.post<boolean>(this.url + "login",user);
  }

  public isAdminUser() : boolean {
    //return true;
    //return false;
    return this.currentUser.role.toUpperCase()=="ADMIN";
  }

  public isStaffUser() : boolean {
    //return true;
    //return false;
    return this.currentUser.role.toUpperCase()=="STAFF";
  }

  public getCurrentUser() : User {
    return this.currentUser;
  }

  public logoutUser() : void {
    this.isLoggedIn = false;
  }

  public searchUser(username : string) : Observable<User> {

    const params = new HttpParams().set("username",username);
    return this.http.get<User>(this.url+"search",{params});

  }
}
