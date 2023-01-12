import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';
import { NavigationModule } from 'src/app/features/navigation/navigation.module';
import { SchedulesModule } from 'src/app/features/schedules/schedules.module';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MainService } from './services/main.service';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreComponentsModule,
    NavigationModule,
    SchedulesModule,

    MatSidenavModule,
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }
