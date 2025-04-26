import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CareersService } from '../../../../../Core/services/careers.service';

@Component({
  selector: 'app-form-careers',
  standalone: false,
  templateUrl: './form-careers.component.html',
  styleUrl: './form-careers.component.scss'
})
export class FormCareersComponent {

  formGroupCareer: FormGroup;

  constructor(
    private fb: FormBuilder,
    private careersService: CareersService,
  ){
    this.formGroupCareer = this.fb.group({
      title: ['', [Validators.minLength(3), Validators.required]],
      description: ['', [Validators.minLength(10), Validators.required]],
    })
  }

  submit() {
    const career = {
      title: this.formGroupCareer.value.title,
      description: this.formGroupCareer.value.description,
    }
    console.log(career);
    this.careersService.addCareer(this.formGroupCareer.value);
    this.formGroupCareer.reset();
  }

  get title() {
    return this.formGroupCareer.get('title');
  }

  get isTitleInvalid() {
    return this.title?.touched && this.title?.invalid;
  }

  get description() {
    return this.formGroupCareer.get('description');
  }

  get isDescriptionInvalid() {
    return this.description?.touched && this.description?.invalid;
  }




}