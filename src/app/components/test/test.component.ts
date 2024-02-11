import { Component } from '@angular/core';
import { ButtonComponent } from '../btn.component'

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  template: `
    <app-btn (btnClick)="clickHandler()" text="EventEmitter"></app-btn>
  `
})
export class TestComponent {
  clickHandler() {
    alert('EventEmitter')
  }
}
