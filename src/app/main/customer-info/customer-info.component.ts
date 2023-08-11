import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { CustomersService } from '../service/customers-service.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  public columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstLastName', headerName: '名字' },
    { field: 'phone', headerName: '电话' },
    { field: 'rewardPoint', headerName: '积分' },
  ];

  rowData = [];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  gridOption: GridOptions = {
    columnDefs: this.columnDefs,
  };

  constructor(private customerSvs: CustomersService) {}

  ngOnInit(): void {
    this.loadCustomerInfo();
  }

  onGridReady(params: GridReadyEvent) {
    this.loadCustomerInfo();
    this.gridOption.api?.setRowData(this.rowData);
  }

  loadCustomerInfo() {
    this.customerSvs.getCustomersInfo().subscribe((res) => {
      this.rowData = res;
      console.log(this.rowData);
    });
  }
}
