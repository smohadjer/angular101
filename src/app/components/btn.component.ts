import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  template: `
    <button (click)=onClick()>{{text}}</button>
  `
})
export class ButtonComponent {
  @Input() text = '';
  @Output() btnClick = new EventEmitter();


  onClick() {
    this.btnClick.emit();
  }
}
