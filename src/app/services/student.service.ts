import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  baseUrl = `http://localhost:4000/api`;

  constructor(public http: HttpClient) {}

  getAllStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`);
  }

  getAllStudentByID(studentId): Observable<any> {
    return this.http.get(`${this.baseUrl}/students/${studentId}`);
  }

  createStudent(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/students`, body);
  }

  updateStudent(studentId, data): Observable<any> {
    return this.http.patch(`${this.baseUrl}/students/${studentId}`, data);
  }

  deleteStudent(studentId): Observable<any> {
    return this.http.delete(`${this.baseUrl}/students/${studentId}`);
  }
}
