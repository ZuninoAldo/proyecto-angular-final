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
import { TitlesDirective } from '../../app/Core/directives/titles.directive'; 




@NgModule({
  declarations: [ 
    FullNamePipe, TitlesDirective
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
    MatListModule
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
    TitlesDirective
  ]
})
export class SharedModule { }
