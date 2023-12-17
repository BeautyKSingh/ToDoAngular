import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.scss'
})
export class ToDoFormComponent {
  UserForm: FormGroup = this.fb.group({
    name: '',
    description: '',

  });

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ToDoFormComponent>) {
  }

  onSubmit() {
    this.dialogRef.close(this.UserForm.value);
  }

}
