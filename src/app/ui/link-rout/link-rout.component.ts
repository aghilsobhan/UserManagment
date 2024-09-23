import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-rout',
  templateUrl: './link-rout.component.html',
  styleUrls: ['./link-rout.component.scss']
})
export class LinkRoutComponent {
@Input() setRouterLink:string='';

}
