import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../account.component';
import { UserLoginComponent } from '../login/user-login.component';
import { UserRegisterComponent } from '../register/user-register.component';
import { AuthGuard } from 'src/app/utils/AuthGuard';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'login', component: UserLoginComponent },
      { path: 'register', component: UserRegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
    
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
