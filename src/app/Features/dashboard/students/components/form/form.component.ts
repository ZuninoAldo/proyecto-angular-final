import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../../../../Core/services/students.service';
import { CareersService } from '../../../../../Core/services/careers.service';

import { v4 as uuidv4 } from 'uuid';
import { Student } from '../../interfaces/students';


@Component({
  selector: 'students-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  formGroup: FormGroup;
  careerNames!: string[];
  isStudentEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private StudentsService: StudentsService,
    private CareersService: CareersService,
  ) {
    this.formGroup = this.fb.group({
      id: [''],
      name: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(2), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      career: ['', [Validators.required]],
    })
    this.CareersService.getCareers();
    this.CareersService.careersTitles$.subscribe((titles) => {
      this.careerNames = titles;
    });
    this.StudentsService.studentEdit$.subscribe((student) => {
      if (student) {
        this.formGroup.patchValue({
          id: student.id,
          name: student.name,
          lastName: student.lastName,
          email: student.email,
          career: student.career,
        });
        this.isStudentEdit = true;
      }
    });
  }



  submit() {
    const isEdit = this.isStudentEdit;
    const student: Student = {
      id: isEdit ? this.formGroup.value.id : uuidv4(),
      name: this.formGroup.value.name,
      lastName: this.formGroup.value.lastName,
      email: this.formGroup.value.email,
      career: this.formGroup.value.career,
    };

    if (isEdit) {
      this.StudentsService.updateStudent(student);
    } else {
      this.StudentsService.addStudentObs(student);
    }

    this.formGroup.reset();
    this.isStudentEdit = false;
    this.StudentsService.studentEdit.next(null);
  }

  get name() {
    return this.formGroup.get('name');
  }

  get isNameInvalid() {
    return this.name?.touched && this.name?.invalid;
  }

  get lastName() {
    return this.formGroup.get('lastName');
  }

  get islastNameInvalid() {
    return this.lastName?.touched && this.lastName?.invalid;
  }

  get email() {
    return this.formGroup.get('email');
  }

  get isEmailInvalid() {
    return this.email?.touched && this.email?.invalid;
  }

  get career() {
    return this.formGroup.get('career');
  }

  get isCareerInvalid() {
    return this.career?.touched && this.career?.invalid;
  }

}
