import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from '../../../models/menuItem';
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit {
 @Input() menu!: MenuItem;
active:boolean=false;
@ViewChild(MatAccordion) accordion: MatAccordion|any;
 constructor() {

 }

  ngOnInit(): void {

  }
  getTrackById(item: any, index: any) {
    return item.id;
  }
}
