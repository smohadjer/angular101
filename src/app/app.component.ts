import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Footer } from './components/footer/index';
import { Header } from './components/header/index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    Header,
    Footer
  ],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer [year]="year"></app-footer>
  `,
  styleUrl: './app.component.css'
})

export class AppComponent {
  year = "2024";
}
