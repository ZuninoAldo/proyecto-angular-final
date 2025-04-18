import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { AlumnosRegistroComponent } from './components/alumnos-registro/alumnos-registro.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    AlumnosRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    SharedModule,
  ],
  exports: [
    FormComponent,
    TableComponent,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    SharedModule,
    AlumnosRegistroComponent
  ],

})
export class StudentsModule { }
