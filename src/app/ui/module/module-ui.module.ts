import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { SlidshowComponent } from '../slidshow/slidshow.component';
import { LinkRoutComponent } from '../link-rout/link-rout.component';
import { AccountModule } from 'src/app/pages/account/module/account.module';


@NgModule({
  declarations: [ButtonComponent,InputComponent,SlidshowComponent,LinkRoutComponent],
  imports: [
    CommonModule,
    
  ],
  exports:[ButtonComponent,InputComponent,SlidshowComponent,LinkRoutComponent]
})
export class ModuleUiModule { }
