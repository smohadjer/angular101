import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './template.html'
})
export class InterceptChildComponent {
  @Input() firstName = 'Saeid';
  @Input() lastName = 'Mohadjer'

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
