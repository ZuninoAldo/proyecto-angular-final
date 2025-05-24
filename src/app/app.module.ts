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
import { provideHttpClient, withFetch } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersModule } from './Features/dashboard/users/users.module';
import { CareerEffects } from './Features/dashboard/careers/store/career.effects';
import { rootReducer } from './Core/store/index';





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
    UsersModule,
    DashboardModule,
    AuthModule,
    StoreModule.forRoot(rootReducer, {}),
    EffectsModule.forRoot([CareerEffects]),
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }


