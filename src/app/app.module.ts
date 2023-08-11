import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CustomerInfoComponent } from './main/customer-info/customer-info.component';
import { RegisterPanelComponent } from './main/register-panel/register-panel.component';
import { ActivityPanelComponent } from './main/activity-panel/activity-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomersService } from './main/service/customers-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CustomerInfoComponent,
    RegisterPanelComponent,
    ActivityPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AgGridModule,
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
