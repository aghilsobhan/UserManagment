import { Component, inject, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrls: ['./dialog-view.component.scss'],
})
export class DialogViewComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { massage: string },
    public dialogRef: MatDialogRef<any>
  ) {}
  dat = inject(MAT_DIALOG_DATA);
  ngOnInit(): void {
    console.log(this.dat);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
