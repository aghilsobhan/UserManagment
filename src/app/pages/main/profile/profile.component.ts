import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared/shared.module";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone:true,
  imports: [SharedModule]
})
export class ProfileComponent {

}
