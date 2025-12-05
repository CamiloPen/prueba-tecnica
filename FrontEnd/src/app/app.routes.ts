import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const routes: Routes = [
   {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  { path: "main", 
    loadComponent: () => import("./main/main.page").then(m => m.MainPage ) },
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks.page').then( m => m.TasksPage),
    canActivate: [authGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  }
];
