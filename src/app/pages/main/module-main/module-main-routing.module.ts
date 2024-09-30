import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main.component';

import { AuthGuard } from 'src/app/utils/AuthGuard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'user',
        loadChildren: () =>
          import('../users/module-user/module-user.module').then(
            (q) => q.ModuleUserModule
          ),
        
      },

      // {
      //   path: 'dashboard',
      //   loadComponent: () =>
      //     import('../dashboard/dashboard.component').then(
      //       (q) => q.DashboardComponent
      //     ),
      //   canActivate: [AuthGuard],
      // },
      // {
      //   path: 'profile',
      //   loadComponent: () =>
      //     import('../profile/profile.component').then(
      //       (q) => q.ProfileComponent
      //     ),
      // },

      // { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleMainRoutingModule {}
