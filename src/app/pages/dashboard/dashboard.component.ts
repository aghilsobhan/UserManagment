import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { map } from 'rxjs';
import { ProfileModel } from 'src/app/models/user/getprofile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userInfo!:ProfileModel;
  constructor(private getProfile:AuthService){}
ngOnInit(): void {
  this.userInfo= this.getProfile.getAccountProfile();
  console.log(this.userInfo);
  // this.getProfile.getAccountProfile().pipe(map(user=>user?.firstName || '' )).subscribe(firstName=>{
  //   this.nameP=firstName;
  //   console.log("first name",firstName);
  // })

}

}
