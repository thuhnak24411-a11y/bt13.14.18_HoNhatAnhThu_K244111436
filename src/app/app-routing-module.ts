import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceCatalogComponent } from './service-catalog/service-catalog'; 
import { CustomerListComponent } from './customer-list/customer-list'; // Import component

const routes: Routes = [
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: 'service-catalog', component: ServiceCatalogComponent },
  { path: 'customer-list', component: CustomerListComponent } // Thêm route mới
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }