import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from './main/customer-info/customer-info.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{ path: 'customers', component: CustomerInfoComponent},{ path: '**', component: MainComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
