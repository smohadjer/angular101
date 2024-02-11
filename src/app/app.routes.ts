import { Routes } from '@angular/router';
import { Home } from './components/home/index';
import { Details } from './components/details/index';
import { InterceptParentComponent } from './intercept-parent';
import { TestComponent } from './components/test/test.component';


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
  },
  {
    path: 'intercept',
    component: InterceptParentComponent,
    title: 'intercept'
  },
  {
    path: 'test',
    component: TestComponent,
    title: 'test'
  }
];
