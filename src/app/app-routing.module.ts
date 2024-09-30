import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './utils/AuthGuard';

import { UserLoginComponent } from './pages/account/login/user-login.component';

const routes: Routes = [
  //lazy loading
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/module/account.module').then(
        (q) => q.AccountModule
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/main/dashboard/dashboard.component').then(
        (q) => q.DashboardComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/main/profile/profile.component').then(
        (q) => q.ProfileComponent
      ),
  },

  { path: '', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
