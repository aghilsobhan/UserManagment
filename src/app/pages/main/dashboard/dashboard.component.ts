import { Component, OnInit } from '@angular/core';


import { ProfileModel } from 'src/app/models/user/getprofile';
import { AuthService } from 'src/app/service/auth/auth.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {
  userInfo!: ProfileModel;
  userName:string='';
  showFiller = false;
  constructor(private getProfile: AuthService) {}
  ngOnInit(): void {
    // this.userInfo = this.getProfile.getAccountProfile().result;
    // this.userName=this.userInfo.firstName

  }
}
