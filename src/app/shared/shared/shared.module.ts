import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';

import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [SidebarComponent,HeaderComponent],
  imports: [
    CommonModule,
    MatSidenavModule, NgIf, MatButtonModule ,MatToolbarModule, MatButtonModule, MatIconModule ],
  exports:[SidebarComponent,HeaderComponent]
})
export class SharedModule { }
