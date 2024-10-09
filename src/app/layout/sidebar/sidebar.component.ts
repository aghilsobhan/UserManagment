import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})
export class SidebarComponent implements OnInit {
  @Input() menus:MenuItem[]=[]
  showSidebar = true;
ngOnInit(): void {}
toggleSideBar(){
  this.showSidebar=!this.showSidebar;
}
}
