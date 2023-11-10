import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'users', loadComponent: () => import('./components/user-list/user-list.component').then(m => m.UserListComponent) },
  { path: 'addUser', loadComponent: () => import('./components/user-form/user-form.component').then(m => m.UserFormComponent) }
];
