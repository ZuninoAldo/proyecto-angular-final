import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../../interfaces/students';

@Component({
  selector: 'app-alumnos-registro',
  standalone: false,
  templateUrl: './alumnos-registro.component.html',
  styleUrl: './alumnos-registro.component.scss'
})
export class AlumnosRegistroComponent {

  
  formGroup: FormGroup;
  students: Student[] = [];
  displayedColumns: string[] = ['name', 'email', 'career'];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: [''],
      lastName: [''],
      email: [''],
      career: [''],
    });
  }

  submit() {
    const student: Student = {
      name: this.formGroup.value.name,
      lastName: this.formGroup.value.lastName,
      email: this.formGroup.value.email,
      career: this.formGroup.value.career,
    };

    this.students = [...this.students, student];
    this.formGroup.reset();
  }

}


