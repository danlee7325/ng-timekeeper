import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';

import { SchedulesComponent } from './pages/schedules/schedules.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { ScheduleDetailsComponent } from './components/schedule-details/schedule-details.component';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    SchedulesComponent,
    ScheduleListComponent,
    ScheduleDetailsComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    MatSidenavModule,
  ],
  exports: [
    ScheduleDetailsComponent
  ]
})
export class SchedulesModule { }
