import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'main',
    title: 'Main',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
  },
  {
    path: '',
    title: 'Login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    title: 'Not Found',
    loadChildren: () => import('./features/not-found/not-found.module').then(m => m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }