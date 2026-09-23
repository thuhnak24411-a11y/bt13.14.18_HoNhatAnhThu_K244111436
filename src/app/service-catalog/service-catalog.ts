import { Component } from '@angular/core';
import { CatalogService } from '../catalog';

@Component({
  selector: 'app-service-catalog',
  standalone: false, 
  templateUrl: './service-catalog.html',
  styleUrls: ['./service-catalog.css']
})
export class ServiceCatalogComponent {
  public categories: any;

  constructor(private cservice: CatalogService) {
    this.categories = cservice.getCategories();
  }
}