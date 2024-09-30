import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './utils/AuthGuard';

import { UserLoginComponent } from './pages/account/login/user-login.component';
import { MainComponent } from './pages/main/main.component';

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
    path: '',
    loadChildren: () =>
      import('./pages/main/module-main/module-main.module').then(
        (q) => q.ModuleMainModule
      ),
      canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
