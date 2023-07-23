import { Component } from '@angular/core';
import { Customer } from '../models/customers';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss']
})
export class RegisterPanelComponent {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model =  new Customer('', '', 0);

submitted = false;

onSubmit() { this.submitted = true; }

onNumberKeyPress(event: KeyboardEvent) {
  const { key } = event;
  const pattern = /^\d+$/;
  // if()
  return true
}

newCustomer() {
this.model = new Customer('', '', 0);
}


}
