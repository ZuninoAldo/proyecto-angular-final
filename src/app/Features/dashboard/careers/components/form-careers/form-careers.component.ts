import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CareersService } from '../../../../../Core/services/careers.service';

import { v4 as uuidv4 } from 'uuid';
import { Career } from '../../interfaces/careers';

@Component({
  selector: 'app-form-careers',
  standalone: false,
  templateUrl: './form-careers.component.html',
  styleUrl: './form-careers.component.scss'
})
export class FormCareersComponent {

  formGroupCareer: FormGroup;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private careersService: CareersService,
  ){
    this.formGroupCareer = this.fb.group({
      id: [''],
      title: ['', [Validators.minLength(3), Validators.required]],
      description: ['', [Validators.minLength(10), Validators.required]],
    })

    this.careersService.careerEdit$.subscribe((career) => {
      if(career){
        this.formGroupCareer.patchValue({
          id: career.id,
          title: career.title,
          description: career.description,
        });
        this.isEdit = true;
      } else {
        this.formGroupCareer.reset();
      }
    })
  }

  submit() {
    this.formGroupCareer.patchValue({
      id: this.isEdit ? this.formGroupCareer.value.id : uuidv4(),
    });

    const career = {
      title: this.formGroupCareer.value.title,
      description: this.formGroupCareer.value.description,
    }
    console.log(career);
    if(this.isEdit){
      this.careersService.updateCareer(this.formGroupCareer.value);
    }else {
      this.careersService.addCareer(this.formGroupCareer.value);
    }

    this.formGroupCareer.reset();
    this.isEdit = false;
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