import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './components/footer/index';
import { Header } from './components/header/index';
import { Quote } from './components/quote/index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Footer, Quote],
  template: `
    <app-header></app-header>
    <main>
      <p>This demo shows how to use:</p>
      <ul>
        <li>&#64;Input decorator</li>
        <li>*ngFor decorator</li>
      </ul>
      <app-quote
        *ngFor="let item of quotesList" [quote]="item"></app-quote>
    </main>
    <app-footer [year]="year"></app-footer>
  `,
  styleUrl: './app.component.css'
})

export class AppComponent {
  quotesList: string[] = [];
  year = "2024";

  constructor() {
    this.quotesList = [
      'My first quote',
      'My second quote'
    ]
  }

}
