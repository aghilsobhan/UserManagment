import { Injectable } from '@angular/core';
import { ResponseLogin } from 'src/app/models/login/ResposeLogin';
import { LoginModel } from '../../models/login/Mlogin';

import axios from 'axios';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly url=`${environment.apiUrl}Accounts/Login`
  async loginRequest(loginModel: LoginModel) {
    const result = axios.post<ResponseLogin>(this.url, loginModel);
    return result;
  }

}
