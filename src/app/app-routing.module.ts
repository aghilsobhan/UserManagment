import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './utils/AuthGuard';

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
    loadChildren: () =>
      import('./pages/dashboard/module/dashboard.module').then(
        (q) => q.DashboardModule
      ),
      canActivate:[AuthGuard]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
