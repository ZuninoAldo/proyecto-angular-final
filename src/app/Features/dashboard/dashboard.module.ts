import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../Shared/shared.module';
import { RouterModule } from '@angular/router';
import { CareersModule } from './careers/careers.module';
import { StudentsModule } from './students/students.module';

import { UsersModule } from './users/users.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule,
    CareersModule,
    StudentsModule,
    UsersModule,
  ],
  exports: [
    SharedModule,
    DashboardComponent,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
