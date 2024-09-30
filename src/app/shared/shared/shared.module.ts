import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';

import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuSidebarComponent } from 'src/app/layout/sidebar/menu-sidebar/menu-sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent,HeaderComponent,MenuSidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule, NgIf, MatButtonModule ,MatToolbarModule, MatButtonModule, MatIconModule ,RouterModule],
  exports:[SidebarComponent,HeaderComponent,MenuSidebarComponent]
})
export class SharedModule { }
