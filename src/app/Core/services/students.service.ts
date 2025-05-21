import { Injectable } from '@angular/core';
import { Student } from '../../Features/dashboard/students/interfaces/students';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private dataSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.dataSubject.asObservable();

  studentEdit = new BehaviorSubject<Student | null>(null);
  studentEdit$ = this.studentEdit.asObservable();

  constructor(private http: HttpClient) { }

  private _students: Student[] = [];

  getStudents(): Student[] {
    return this._students;
  }

  setUpdateStudent(id: string) {
    const student = this._students.find((student) => student.id === id);

    if (!student) {
      alert('Alumno no encontrado.');
      return
    }

    this.studentEdit.next(student);
  }

  updateStudent(student: Student) {
    this.http.put<Student>(`${environment.apiUrl}/students/${student.id}`, student).subscribe({
      next: (student) => {
        this._students = this._students.map((s) => s.id === student.id ? student : s);
        this.dataSubject.next(this._students);
        this.studentEdit.next(null);
      },
      error: (error) => {
        console.error('Error al actualizar los datos del Alumno: ', error);
      },
    })
  }

  getStudentsObs() {
    this.dataSubject.next(this._students);
    this.http.get<Student[]>(`${environment.apiUrl}/students`).subscribe((students) => {
      this._students = students;
      this.dataSubject.next(this._students);
    })
  }

  addStudentObs(student: Student) {
    this.http.post<Student>(`${environment.apiUrl}/students`, student).subscribe({
      next: (student) => {
        this._students = [...this._students, student];
        this.dataSubject.next(this._students);
      },
      error: (error) => {
        console.error('Error agregando al Alumno:', error);
      },
    })
  }

  deleteStudent(id: string) {
    this.http.delete<Student>(`${environment.apiUrl}/students/${id}`).subscribe({
      next: (student) => {
        this._students = this._students.filter((student) => student.id !== id);
        this.dataSubject.next(this._students);
      },
      error: (error) => {
        console.error('Error al intentar borrar al Alumno:', error);
      },
    })
  }

}