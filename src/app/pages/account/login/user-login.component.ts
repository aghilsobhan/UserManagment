import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AxiosError } from 'axios';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, catchError } from 'rxjs';
import { LoginModel } from 'src/app/models/login/Mlogin';
import { ResponseLogin } from 'src/app/models/login/ResposeLogin';
import { AuthenticationModel } from 'src/app/models/token/token';
import { AuthService } from 'src/app/service/auth/auth.service';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  customForm!: FormGroup;
  loginModel!: LoginModel;
  returnUrl: string = '';
  errorMessage :string | any='';
  userSubject = new BehaviorSubject<ResponseLogin | null>(null);
  user = this.userSubject.asObservable();
  constructor(
    private sendLogin: LoginService,
    private toast: ToastrService,
    private router: Router,
    private rout: ActivatedRoute,
    private auth: AuthService
  ) {}
  ngOnInit(): void {
    if (this.auth.getToken()) this.router.navigate(['dashboard']);
    this.customForm = new FormGroup({
      email: new FormControl('', Validators.minLength(4)),
      password: new FormControl('', Validators.minLength(4)),
    });
  }

  save() {
    this.returnUrl = this.rout.snapshot.queryParams['returnUrl'] || 'dashboard';
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

        this.sendLogin.loginRequest(this.loginModel).subscribe({
          next: (userLogin: ResponseLogin) => {
            this.userSubject.next(userLogin);
         ;
          },
          error: (error) => {
            this.userSubject.next(error.error)

          },
        });

        this.user.subscribe({
          next:(userLogin)=>{
            console.log(userLogin);
            if(userLogin?.result.token){
              this.auth.setToken(userLogin?.result.token)
               this.router.navigate([this.returnUrl]);
            }else{
              this.errorMessage=userLogin?.message
            }

          },

        })


    }
  }
}
