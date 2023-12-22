import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>&copy; Saeid Mohadjer {{year}}</footer>
  `,
  styleUrl: './style.css'
})
export class Footer {
  @Input() year = '2022';
}
