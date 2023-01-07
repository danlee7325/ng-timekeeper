import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAccountComponent } from './pages/new-account/new-account.component';

const routes: Routes = [
  {
    path: '',
    title: 'New Account',
    component: NewAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewAccountRoutingModule { }
