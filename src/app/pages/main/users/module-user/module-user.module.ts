import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUserRoutingModule } from './module-user-routing.module';
import { UserComponent } from '../user.component';
import { CreateComponent } from '../create/create.component';
import { ListComponent } from '../list/list.component';
import { UpdateComponent } from '../update/update.component';


@NgModule({
  declarations: [UserComponent,CreateComponent,ListComponent,UpdateComponent],
  imports: [
    CommonModule,
    ModuleUserRoutingModule
  ],
  exports:[UserComponent,CreateComponent,ListComponent,UpdateComponent]
})
export class ModuleUserModule { }
