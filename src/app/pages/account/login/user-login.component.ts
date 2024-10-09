import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { ProfileModel } from 'src/app/models/user/getprofile';

import { LoginRequest } from 'src/app/models/user/loginRequest';
import { LoginResponse } from 'src/app/models/user/loginResponse';
import { AccountsService } from 'src/app/service/account/accounts.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ErrorHandlingService } from 'src/app/service/errors/error-handling.service';
import { DialogViewComponent } from 'src/app/ui/dialog-view/dialog-view.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  customForm!: FormGroup;
  returnUrl: string = '';
  errorMessage: string | any = '';
  loginRequest!: LoginRequest;
  constructor(
    private accountService: AccountsService,
   
    private router: Router,
    private rout: ActivatedRoute,
    private auth: AuthService,
    private err: ErrorHandlingService,
    private dialog:MatDialog
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
      this.loginRequest = {
        userName: 'superadmin',
        password: 'Qwe123!@#',
        captchaText: 'bar',
        keepMeSignedIn: true,
      };

      this.accountService.loginRequest(this.loginRequest).subscribe({
        next: (userLogin: LoginResponse) => {

          if (userLogin?.result.token) {
            this.auth.setToken(userLogin?.result.token);
            this.accountService.getProfile().subscribe({
              next: (profileUser: ProfileModel) => {
                this.auth.setAccountProfile(profileUser);
                this.router.navigate([this.returnUrl]);
              },
              error: (error: any) => {
                console.log('error inner btn login', error);
                this.errorMessage=this.err.getErrorHandling().message;
              },
            });
          } else {
            console.log('error in else if login', userLogin);
            this.errorMessage=this.err.getErrorHandling().message;
          }
        },
        error: (error: any) => {
        //  this.errorMessage=this.err.getErrorHandling().message;
        },
      });

    //   // this.user.subscribe({
    //   //   next:(userLogin)=>{
    //   //     console.log(userLogin);
    //   //     if(userLogin?.result.token){
    //   //       this.auth.setToken(userLogin?.result.token)
    //   //        this.router.navigate([this.returnUrl]);
    //   //     }else{
    //   //       this.errorMessage=userLogin?.message
    //   //     }

    //   //   },

    //   // })
     }
  }
}
