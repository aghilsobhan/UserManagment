import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AxiosError } from 'axios';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/login/Mlogin';
import { ResponseLogin } from 'src/app/models/login/ResposeLogin';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  customForm!: FormGroup;
  loginModel!: LoginModel;
  response: ResponseLogin = {
    message: '',
    messages: [],
    result: [],
    status: 0,
  };
  errorMessage = '';
  constructor(private sendLogin: LoginService, private toast: ToastrService) {}
  ngOnInit(): void {
    this.customForm = new FormGroup({
      email: new FormControl('', Validators.minLength(4)),
      password: new FormControl('', Validators.minLength(4)),
    });
  }

  async save() {

    if (this.customForm.invalid) {
      this.customForm.markAllAsTouched();
    }
    if (this.customForm.valid) {
      this.customForm.markAllAsTouched();
    }
    if (this.customForm.valid) {
      this.loginModel = {
        userName: 'superadmin',
        password: 'Qwe123!@#',
        captchaText: 'bar',
        keepMeSignedIn: true,
      };
      try {
        const result = await this.sendLogin.loginRequest(this.loginModel);
        this.response = result.data;
        this.toast.success(this.response.message);
        this.response.message;
        
      } catch (error: AxiosError | any) {
        console.log('error in ts login', error);
        if (error.response) {
          this.response = error.response.data;
          this.toast.error(this.response.message);
        }
      }
    }
    // if (this.customForm.valid) {
    //   this.loginModel = {
    //     userName: 'superhadmin',
    //     password: 'Qwe123!@#',
    //     captchaText: 'bar',
    //     keepMeSignedIn: true,
    //   };
    //   this.sendLogin
    //     .loginRequest(this.loginModel)
    //     .then((res) => (this.response = res.data))
    //     .catch((err) => this.response=err.response.data);
    // }
  }
}
