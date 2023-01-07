import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewAccountRoutingModule } from './new-account-routing.module';

import { NewAccountComponent } from './pages/new-account/new-account.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider'; 

@NgModule({
  declarations: [
    NewAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    NewAccountRoutingModule,

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class NewAccountModule { }
