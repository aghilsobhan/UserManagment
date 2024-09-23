import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  customForm!:FormGroup;
  constructor(){this}
ngOnInit(): void {
this.customForm=new FormGroup({
  email:new FormControl('',Validators.required),
  password:new FormControl('',Validators.minLength(4))
})
}
save(){
  console.log(this.customForm.value);
}
}
