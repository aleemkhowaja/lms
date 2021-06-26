import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-action-reason-popup',
  templateUrl: './action-reason-popup.component.html',
  styleUrls: ['./action-reason-popup.component.scss']
})
export class ActionReasonPopupComponent implements OnInit {

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<ActionReasonPopupComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public action: string) {
  }

  ngOnInit() {
    this.form = ActionReasonPopupComponent.initiateForm();
  }

  private static initiateForm(): FormGroup {
    return new FormGroup({
      reason: new FormControl(null, Validators.required)
    });
  }

  confirm(): void {
    this.dialogRef.close(this.form.controls["reason"].value);
  }

}
