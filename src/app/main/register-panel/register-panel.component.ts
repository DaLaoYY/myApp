import { Component } from '@angular/core';
import { Customer, CustomerInfo } from '../models/customers';
import { CustomersService } from '../service/customers-service.service';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss'],
})
export class RegisterPanelComponent {
  constructor(private customerSvc: CustomersService) {}

  model = new Customer('', '', 0);
  showError = false;
  submitted = false;

  onSubmit() {
    this.model;
    const customerInfo: CustomerInfo = {
      firstLastName: this.model.firstLastName,
      phone: Number(this.model.phoneNumber),
      rewardPoint: this.model.point,
    };
    this.customerSvc.createNewCustomer(customerInfo).subscribe((res) => {
      this.showError = false;
      if (res.type === 'ERROR') {
        this.showError = true;
      }
    });
    this.submitted = true;
  }

  onKeyPress(event: KeyboardEvent) {
    const inputChar = event.key;
    const regexPattern = /^[0-9]*$/; // Only allow digits (numeric values)

    if (!regexPattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  newCustomer() {
    this.model = new Customer('', '', 0);
  }
}
