import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { CareersComponent } from './careers/careers.component';
import { DetailsComponent } from './careers/pages/details/details.component';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../../Core/guards/admin.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
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
            path: 'student/:id',
            component: DetailsComponent,
          },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [adminGuard],
      },
      {
        path: 'careers',
        component: CareersComponent,
      },
      {
        path: 'careers/:title',
        component: DetailsComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
