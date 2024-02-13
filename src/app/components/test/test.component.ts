import { Component } from '@angular/core';
import { ButtonComponent } from '../btn.component'

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  template: `
    <div>
      <p>Example of EventEmitter</p>
      <app-btn (customClick)="clickHandler($event)" text="EventEmitter"></app-btn>
    </div>
  `
})
export class TestComponent {
  constructor() {}

  clickHandler(event: string) {
    console.log('clickhandler', event);
    alert('EventEmitter');
  }
}
