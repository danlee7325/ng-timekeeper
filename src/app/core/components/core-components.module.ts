import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon'; 

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreComponentsModule { }
