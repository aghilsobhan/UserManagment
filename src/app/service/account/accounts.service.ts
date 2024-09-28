import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/app/models/user/getprofile';
import { LoginRequest } from 'src/app/models/user/loginRequest';
import { LoginResponse } from 'src/app/models/user/loginResponse';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {


  readonly url = `${environment.apiUrl}Accounts/Login`;
  readonly urlProfile = `${environment.apiUrl}Accounts/GetProfile`;

  constructor(private http:HttpClient){}
  loginRequest(data:LoginRequest) :Observable<any>{
    const result = this.http.post<LoginResponse>(this.url, data);
    return result;
  }
  getProfile():Observable<ProfileModel>{
    const result=this.http.get<ProfileModel>(this.urlProfile);
    return result;

  }
}
