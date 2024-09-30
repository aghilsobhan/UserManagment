import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CreateComponent } from '../create/create.component';
import { ListComponent } from '../list/list.component';
import { UpdateComponent } from '../update/update.component';
import { UserComponent } from '../user.component';
import { ModuleUserRoutingModule } from './module-user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent,
  ],
  imports: [CommonModule, ModuleUserRoutingModule, SharedModule],
  exports: [UserComponent, CreateComponent, ListComponent, UpdateComponent],
})
export class ModuleUserModule {}
