import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from '../../../Shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { UsersService } from '../../../Core/services/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    UsersComponent,
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
    TableComponent,
    FormComponent,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    UsersComponent,
  ],

  providers: [UsersService]
})
export class UsersModule { }
