import { Component } from '@angular/core';
import { InterceptChildComponent } from '../intercept-child';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    InterceptChildComponent
  ],
  templateUrl: './template.html',
})
export class InterceptParentComponent {
    fName = 'Majid';
    lName = 'Mohadjer';

    changeName() {
      this.fName = 'Mehdi';
      this.lName = 'Givehchi';
    }
}
