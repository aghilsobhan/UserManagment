import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountComponent } from '../account.component';
import { UserLoginComponent } from '../login/user-login.component';
import { UserRegisterComponent } from '../register/user-register.component';
import { AccountRoutingModule } from './account-routing.module';
import { ModuleUiModule } from 'src/app/ui/module/module-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../../dashboard/dashboard.component';



@NgModule({
  declarations: [AccountComponent, UserLoginComponent, UserRegisterComponent,DashboardComponent],
  imports: [CommonModule, AccountRoutingModule,ModuleUiModule ,FormsModule,ReactiveFormsModule,],

})
export class AccountModule {}
