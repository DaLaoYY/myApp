import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInfo } from '../models/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customerUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getCustomersInfo(): Observable<any> {
    return this.http.get<any>(this.customerUrl + 'customers');
  }

  getCustomerByPhone(phone: number): Observable<any> {
    return this.http.get<any>(this.customerUrl + `customers/${phone}`);
  }

  createNewCustomer(customerInfo: CustomerInfo): Observable<any> {
    console.log(customerInfo);
    return this.http.post(this.customerUrl + 'create', customerInfo);
  }

  updateCustomer(id: number, body: any): Observable<any> {
    console.log(id, body);
    return this.http.put(this.customerUrl + `updateCustomer/${id}`, body);
  }
}
