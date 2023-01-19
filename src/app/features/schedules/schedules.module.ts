import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';

import { SchedulesComponent } from './pages/schedules/schedules.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { ScheduleDetailsComponent } from './components/schedule-details/schedule-details.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { ScheduleDurationPipe } from 'src/app/core/pipes/scheduleDuration.pipe';

@NgModule({
  declarations: [
    SchedulesComponent,
    ScheduleListComponent,
    ScheduleDetailsComponent,
    ScheduleDurationPipe
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,

    MatSidenavModule,
    MatIconModule,
  ],
  exports: [
    ScheduleDetailsComponent
  ]
})
export class SchedulesModule { }
