import { Injectable } from '@angular/core';
import { Student } from '../../Features/dashboard/students/interfaces/students';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private dataSubject = new BehaviorSubject<Student []>([]);
  students$ = this.dataSubject.asObservable();

  private _students: Student[] = [
    {
      name: 'Juan',
      lastName: 'Perez',
      email: 'juan.perez@gmail.com',
      career: 'FrontEnd',
    },
    {
      name: 'Camila',
      lastName: 'Alvarez',
      email: 'cami.alvarez@gmail.com',
      career: 'BackEnd',
    },
  ];

  getStudents(): Student[] {
    return this._students;
  }

  getStudentsObs() {
    this.dataSubject.next(this._students);
  }

  addStudentObs(student: Student) {
    this._students = [...this._students, student];
    this.dataSubject.next(this._students);
  }

  

  constructor() { }
}
