import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { SlidshowComponent } from '../slidshow/slidshow.component';
import { LinkRoutComponent } from '../link-rout/link-rout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ButtonComponent,InputComponent,SlidshowComponent,LinkRoutComponent,DialogViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule


  ],

  exports:[ButtonComponent,InputComponent,SlidshowComponent,LinkRoutComponent,DialogViewComponent]
})
export class ModuleUiModule { }
