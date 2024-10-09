import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  firstFormGroup!:FormGroup;
  ngOnInit(): void {
    // this.customForm = new FormGroup({
    //   firstName: new FormControl('', Validators.minLength(4)),
    //   lastName: new FormControl('', Validators.minLength(4)),
    //   phoneNumber: new FormControl('', Validators.minLength(4)),
    //   email: new FormControl('', Validators.minLength(4)),
    //   fatherName: new FormControl('', Validators.minLength(4)),

    // });
    this.firstFormGroup = new FormGroup({
      firstName:new FormControl ('', Validators.minLength(4)),
        lastName:new FormControl ('', Validators.minLength(4)),
        phoneNumber:new FormControl ('', Validators.minLength(4)),
        email:new FormControl ('', Validators.minLength(4)),
        fatherName:new FormControl ('', Validators.minLength(4)),

    });

  }
  save(){
    console.log(this.firstFormGroup,this.secondFormGroup);
  }

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {}
}
