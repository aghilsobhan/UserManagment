import { Injectable } from '@angular/core';
import { ResponseLogin } from 'src/app/models/login/ResposeLogin';
import { LoginModel } from '../../models/login/Mlogin';

import axios from 'axios';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly url = `${environment.apiUrl}Accounts/Login`;
  constructor(private http:HttpClient){}
  loginRequest(loginModel: LoginModel) :Observable<any>{
    const result = this.http.post<any>(this.url, loginModel);

    return result;
  }
}
