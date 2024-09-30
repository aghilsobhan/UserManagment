import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleMainRoutingModule } from './module-main-routing.module';
import { MainComponent } from '../main.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AccountRoutingModule } from '../../account/module/account-routing.module';
import { ModuleUiModule } from 'src/app/ui/module/module-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from '../users/user.component';
import { ModuleUserModule } from '../users/module-user/module-user.module';


@NgModule({
  declarations: [MainComponent,DashboardComponent,ProfileComponent],
  imports: [
    CommonModule,
    ModuleMainRoutingModule,
    SharedModule,
    ModuleUiModule,
    ModuleUserModule


  ],

})
export class ModuleMainModule { }
