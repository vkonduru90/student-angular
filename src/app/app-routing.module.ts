import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path: '', component: StudentsListComponent },
  {path: 'list-students', component: StudentsListComponent},
  {path: 'create-students', component: CreateStudentComponent},
  {path: 'view-students/:studentId', component: ViewStudentComponent},
  {path: 'update-students/:studentId', component: CreateStudentComponent},
  {path: '**', component: StudentsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
