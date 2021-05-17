import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  studentForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(5)]),
    email: new FormControl('', [Validators.minLength(5), Validators.email]),
    password: new FormControl('', [Validators.minLength(5)]),
    rollNumber: new FormControl('', [Validators.minLength(5)]),
  });

  constructor() {}

  ngOnInit(): void {}

  onsubmit() {
    console.log(this.studentForm.value);
  }
}
