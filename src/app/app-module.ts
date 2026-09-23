import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { ProductService } from './product';
import { ServiceCatalogComponent } from './service-catalog/service-catalog'; 
import { CatalogService } from './catalog'; 
import { CustomerListComponent } from './customer-list/customer-list'; // Import component mới
import { CustomerService } from './customer'; // Import service mới

@NgModule({
  declarations: [
    AppComponent,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    ServiceCatalogComponent,
    CustomerListComponent // Thêm vào declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Thêm vào imports để dùng được HttpClient
  ],
  providers: [
    ProductService,
    CatalogService,
    CustomerService // Thêm vào providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }