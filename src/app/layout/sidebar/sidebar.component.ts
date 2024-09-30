import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menus:MenuItem[]=[
    {
      id: 2,
      title: 'users',
      path: 'settingProfile',
      children: [
        {
          id: 3,
          title: 'list example',
          path: 'settingProfile/example',
          children: null,
        },
      ],
    },
    {
      id: 4,
      title: 'dashboard',
      path: 'dashboard',
      children: [ ],
    },
  ];
  @Input()
  showSidebar = true;
ngOnInit(): void {}
toggleSideBar(){
  this.showSidebar=!this.showSidebar;
}
}
