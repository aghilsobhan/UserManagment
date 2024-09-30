import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideToggle=new EventEmitter();
  ngOnInit(): void {

  }
  toggle(){
    this.sideToggle.emit();
  }


}
