import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.html',
  styleUrls: ['./service-product-image-event.css']
})
export class ServiceProductImageEventComponent {
  public products: any;

  constructor(private pservice: ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }

  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.ProductId]);
  }
}