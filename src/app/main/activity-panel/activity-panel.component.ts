import { Component } from '@angular/core';
import { CustomersService } from '../service/customers-service.service';
import { CustomerInfo } from '../models/customers';

@Component({
  selector: 'app-activity-panel',
  templateUrl: './activity-panel.component.html',
  styleUrls: ['./activity-panel.component.scss'],
})
export class ActivityPanelComponent {
  phoneNumber = '';
  active = false;
  notFound = false;
  customer: CustomerInfo | undefined;
  minusPoint = '';
  plusPoint = '';
  constructor(private customerSvs: CustomersService) {}
  onKeyPress(event: KeyboardEvent) {
    const inputChar = event.key;
    const regexPattern = /^[0-9]*$/; // Only allow digits (numeric values)

    if (!regexPattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  searchCustomer() {
    this.customerSvs
      .getCustomerByPhone(Number(this.phoneNumber))
      .subscribe((res: CustomerInfo[]) => {
        this.active = true;
        if (res.length === 0) {
          this.notFound = true;
          this.customer = undefined;
        } else if (res.length > 0) {
          this.notFound = false;
          this.customer = res[0];
        }
      });
  }

  updateReward(point: number) {
    console.log(this.customer);
    this.customerSvs.updateCustomer(1, this.customer).subscribe((res) => {
      console.log(res);
    });
  }
}
