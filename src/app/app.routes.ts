import { Routes } from '@angular/router';
import { Home } from './components/home/index';
import { Details } from './components/details/index';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Product Detail'
  }
];
