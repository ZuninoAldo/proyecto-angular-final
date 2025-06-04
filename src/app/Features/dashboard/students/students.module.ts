import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { SharedModule } from '../../../Shared/shared.module';
import { StudentsService } from '../../../Core/services/students.service';
import { StudentsComponent } from './students.component';
import { DetailsComponent } from './pages/details/details.component';





@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    StudentsComponent,
    DetailsComponent,

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
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    SharedModule,
    StudentsComponent,
    DetailsComponent,
  ],

  providers: [StudentsService],

})
export class StudentsModule { }
