import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';

import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreComponentsModule,

    MatSidenavModule,
  ]
})
export class MainModule { }
