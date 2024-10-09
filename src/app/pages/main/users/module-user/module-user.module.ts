import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CreateComponent } from '../create/create.component';
import { ListComponent } from '../list/list.component';
import { UpdateComponent } from '../update/update.component';
import { UserComponent } from '../user.component';
import { ModuleUserRoutingModule } from './module-user-routing.module';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { ModuleUiModule } from "../../../../ui/module/module-ui.module";
import { ViewInformationComponent } from '../create/view-information/view-information.component';
import { AddressUserComponent } from '../create/address-user/address-user.component';
import { PersonalUserComponent } from '../create/personal-user/personal-user.component';
@NgModule({
  declarations: [
    UserComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent,
    PersonalUserComponent, AddressUserComponent, ViewInformationComponent
  ],
  imports: [CommonModule, ModuleUserRoutingModule, SharedModule, MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, ModuleUiModule],
  exports: [UserComponent, CreateComponent, ListComponent, UpdateComponent,PersonalUserComponent, AddressUserComponent, ViewInformationComponent],
})
export class ModuleUserModule {}
