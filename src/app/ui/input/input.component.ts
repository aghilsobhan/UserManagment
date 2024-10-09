import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit{
  ngOnInit(): void {
      console.log(this.control);
  }
  @Input() type: string = '';
  @Input() placeHolder: string = '';
  @Input() control: FormControl | any;
  @Input() inputId: string = '';
  errorMessage: any = {
    required: 'فیلد الزامیست',
    minlength: 'حدااقل فیلد وارد شده 4 میباشد',
  };
}
