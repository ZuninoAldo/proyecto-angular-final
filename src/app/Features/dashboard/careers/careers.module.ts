import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCareersComponent } from './components/table-careers/table-careers.component';
import { FormCareersComponent } from './components/form-careers/form-careers.component';
import { SharedModule } from '../../../Shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CareersService } from '../../../Core/services/careers.service';
import { CareersComponent } from './careers.component';
import { DetailsComponent } from './pages/details/details.component';





@NgModule({
  declarations: [
    TableCareersComponent,
    FormCareersComponent,
    CareersComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
  ],

  exports: [
    SharedModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    CareersComponent,
  ],

  providers: [CareersService],
})
export class CareersModule { }
