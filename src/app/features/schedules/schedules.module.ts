import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SchedulesRoutingModule } from './schedules-routing.module';

import { SchedulesComponent } from './pages/schedules/schedules.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ScheduleDurationPipe } from 'src/app/core/pipes/scheduleDuration.pipe';
import { ScheduleDialogComponent } from './components/schedule-dialog/schedule-dialog.component';

@NgModule({
  declarations: [
    SchedulesComponent,
    ScheduleListComponent,
    ScheduleDurationPipe,
    ScheduleDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SchedulesRoutingModule,

    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,

    FontAwesomeModule
  ],
  exports: []
})
export class SchedulesModule { }
