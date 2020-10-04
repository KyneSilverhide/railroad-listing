import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item} from '../../models/item.model';

export interface DialogData {
  item: Item;
}

@Component({
  selector: 'app-picture-dialog',
  templateUrl: './picture-dialog.component.html',
  styleUrls: ['./picture-dialog.component.scss']
})
export class PictureDialogComponent implements OnInit {

  item: Item;

  constructor(public dialogRef: MatDialogRef<PictureDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
    this.item = this.data.item;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
