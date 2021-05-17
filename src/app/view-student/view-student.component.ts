import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentService } from '../services/student.service';
import { IStudent } from './IStuddent';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {
  student: IStudent;
  constructor(public route: ActivatedRoute, public __ss: StudentService) {}

  ngOnInit(): void {
    this.route.params.subscribe((result) => {
      console.log(result.studentId);
      this.getstudentDetails(result.studentId);
    });
  }

  getstudentDetails(studentId) {
    this.__ss.getAllStudentByID(studentId).subscribe((res) => {
      this.student = res[0] || {};
    }, err => {
      console.log(err);
    });
  }
}
