import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { FullNamePipe } from '../Core/pipes/fullName/full-name.pipe';
import { TitlesDirective } from '../Core/directives/titles.directive'; 
import { StudentsService } from '../Core/services/students.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [ 
    FullNamePipe, TitlesDirective, SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule, 
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  exports: [
    MatSidenavModule, 
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    FullNamePipe,
    TitlesDirective,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],

  providers: [StudentsService],
})
export class SharedModule { }
