import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <div class="logo">Angular Sandbox</div>
    </header>
  `,
  styleUrl: './style.css'
})
export class Header {

}
