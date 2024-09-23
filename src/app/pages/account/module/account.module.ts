import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountComponent } from '../account.component';
import { UserLoginComponent } from '../login/user-login.component';
import { UserRegisterComponent } from '../register/user-register.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [AccountComponent, UserLoginComponent, UserRegisterComponent],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
