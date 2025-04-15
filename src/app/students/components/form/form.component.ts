import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'students-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: [''],
      lastName: [''],
      email: [''],
      career: [''],
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
  this.formGroup.reset();
}

}
