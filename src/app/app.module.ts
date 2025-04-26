import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsModule } from '../app/Features/dashboard/students/students.module';
import { SharedModule } from './Shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CareersModule } from './Features/dashboard/careers/careers.module';
import { HomeComponent } from './Features/dashboard/home/home.component';
import { DashboardModule } from './Features/dashboard/dashboard.module';
import { AuthModule } from './Features/auth/auth.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    SharedModule,
    ReactiveFormsModule,
    CareersModule,
    DashboardModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


