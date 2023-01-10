import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        title: 'Schedules',
        loadChildren: () => import('../schedules/schedules.module').then(m => m.SchedulesModule)
      },
      {
        path: 'schedules',
        title: 'Schedules',
        loadChildren: () => import('../schedules/schedules.module').then(m => m.SchedulesModule)
      },
      {
        path: 'admin',
        title: 'Admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
