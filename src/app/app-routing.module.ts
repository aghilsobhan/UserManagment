import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './utils/AuthGuard';
import { AccountComponent } from './pages/account/account.component';
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
    loadChildren: () =>
      import('./pages/dashboard/module/dashboard.module').then(
        (q) => q.DashboardModule
      ),
      canActivate:[AuthGuard]
  },

{path:'',
  component:UserLoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
