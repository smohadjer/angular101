import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  template: `
    <div class="quote">{{quote}}</div>
  `,
  styleUrl: './style.css'
})

export class Quote {
  @Input() quote: string = '';

  constructor() {
    console.log(this.quote);
  }
}
