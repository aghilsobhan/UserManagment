import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { SlidshowComponent } from '../slidshow/slidshow.component';
import { LinkRoutComponent } from '../link-rout/link-rout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ButtonComponent,InputComponent,SlidshowComponent,LinkRoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports:[ButtonComponent,InputComponent,SlidshowComponent,LinkRoutComponent]
})
export class ModuleUiModule { }
