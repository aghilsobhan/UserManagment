import { Component } from '@angular/core';
import { MenuItem } from '../../models/menuItem';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  menuSidebar: MenuItem[] = [
    { id: 1, title: 'داشبورد', path: '/dashboard',icon:"dashboard", children: [] },

    { id: 2, title: 'پروفایل', path: '/profile',icon:"account_circle", children: [] },

    {
      id: 3,
      title: 'کاربر',
      icon:"person",
      path: 'user/create',
      children: [
        { id: 4, title: 'ایجاد کاربر جدید',icon:"", path: 'user/create', children: [] },
        { id: 5, title: 'لیست کاربران', path: 'user/list', icon:"",children: [] },
      ],
    },
  ];
}
