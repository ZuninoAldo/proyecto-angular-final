import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../../../../Core/services/students.service';
import { CareersService } from '../../../../../Core/services/careers.service';


@Component({
  selector: 'students-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  formGroup: FormGroup;
  careerNames!: string [];

  constructor(
    private fb: FormBuilder,
    private StudentsService: StudentsService,
    private CareersService: CareersService,
  ) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(2), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      career: ['', [Validators.required]],
    })
    this.CareersService.getCareersTitles();
    this.CareersService.careersTitles$.subscribe((titles) => {
      this.careerNames = titles;
    })
  }



  submit() {

    const student = {
      name: this.formGroup.value.name,
      lastName: this.formGroup.value.lastName,
      email: this.formGroup.value.email,
      career: this.formGroup.value.career,
    }
    console.log(student);
    this.StudentsService.addStudentObs(this.formGroup.value);
    this.formGroup.reset();

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
