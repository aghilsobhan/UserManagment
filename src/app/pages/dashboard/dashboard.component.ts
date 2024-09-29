import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

import { ProfileModel } from 'src/app/models/user/getprofile';

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
