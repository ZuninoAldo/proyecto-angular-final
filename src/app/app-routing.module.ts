import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Features/dashboard/students/students.component';
import { CareersComponent } from './Features/dashboard/careers/careers.component';
import { HomeComponent } from './Features/dashboard/home/home.component';
import { DetailsComponent } from './Features/dashboard/careers/pages/details/details.component';
import { LoginComponent } from './Features/auth/login/login.component';
import { DashboardComponent } from './Features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'careers',
        component: CareersComponent,
          },
          {
            path: 'careers/:title',
            component: DetailsComponent,
          },
        ],
      },
      {
        path: '**',
        redirectTo: 'auth',
      }
    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
