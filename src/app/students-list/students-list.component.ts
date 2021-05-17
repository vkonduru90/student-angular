import { Component, OnInit, ViewChild } from '@angular/core';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  students = [];
  headers = [
    'rollNumber',
    'name',
    'email',
    'password',
    'isActive',
    'dateCreated',
  ];
  deleteStudentID='';
  @ViewChild('confirmDelete') changePasswordModel: any;
  constructor(public __ss: StudentService) {}

  ngOnInit(): void {
    this.getStudnetList();
  }

  getStudnetList() {
    this.__ss.getAllStudents().subscribe(
      (response) => {
        this.students = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteStudent(studentId) {
    this.__ss.deleteStudent(studentId).subscribe(res => {
      alert(res.message);
    })
  }
}
