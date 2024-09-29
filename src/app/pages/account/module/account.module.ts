import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleUiModule } from 'src/app/ui/module/module-ui.module';
import { AccountComponent } from '../account.component';
import { UserRegisterComponent } from '../register/user-register.component';
import { AccountRoutingModule } from './account-routing.module';
import { UserLoginComponent } from '../login/user-login.component';

@NgModule({
  declarations: [AccountComponent, UserLoginComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ModuleUiModule,
    FormsModule,
    ReactiveFormsModule,

  ],
})
export class AccountModule {}
