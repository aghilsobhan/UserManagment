import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProfileModel } from 'src/app/models/user/getprofile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private profile!:ProfileModel;
  constructor() { }

  getToken():string | null{
    return localStorage.getItem('token')
  }
  //set token login account
  setToken(token:string){
    localStorage.setItem('token',token);
  }
  //set user profile
  setAccountProfile(data:ProfileModel){
    this.profile=data;
  }
  //get user profile
  getAccountProfile(){
    return this.profile;
  }
}
