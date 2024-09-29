import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { AccountsService } from '../service/account/accounts.service';
import { ProfileModel } from '../models/user/getprofile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class InitializerServiceService {
  constructor(
    private authService: AuthService,
    private accountService: AccountsService,
    private router:Router
  ) {}
  init(): Promise<Boolean> {
    const token = this.authService.getToken();
    return new Promise<Boolean>((resolve, reject) => {
      if (token) {
    
        this.accountService.getProfile().subscribe({
          next: (userInfo: ProfileModel) => {
            this.authService.setAccountProfile(userInfo);


            resolve(true);
          },
        });
      } else{this.router.navigate(['/account']);resolve(true);}
    });
  }
}
