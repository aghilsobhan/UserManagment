import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-user',
  templateUrl: './personal-user.component.html',
  styleUrls: ['./personal-user.component.scss']
})
export class PersonalUserComponent implements OnInit{
  @Input() customForm!:FormGroup

  ngOnInit(): void {console.log(this.customForm.controls['firstName']);

  }
  save(){
    console.log(this.customForm.controls);
  }

}
