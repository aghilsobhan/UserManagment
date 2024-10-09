import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../../models/menuItem';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit {
  @Input() menu!: MenuItem;
  active: boolean = false;
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {
    console.log(this.menu);
  }
  getTrackById(item: any, index: any) {
    return item.id;
  }
}
