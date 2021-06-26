import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-delete-popup',
  templateUrl: './confirm-action-popup.component.html',
  styleUrls: ['./confirm-action-popup.component.scss']
})
export class ConfirmActionPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmActionPopupComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: { action: string, itemName: string }) {
  }

  ngOnInit() {
  }

  confirm(): void {
    this.dialogRef.close("YES");
  }

  cancel(): void {
    this.dialogRef.close("NO");
  }

}
