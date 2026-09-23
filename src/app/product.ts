import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Cập nhật đúng tên file ảnh thực tế của bạn
  productsImage = [
    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'assets/coca.jpeg' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'assets/pepsi.jpeg' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'assets/sting.jpeg' },
  ];

  constructor() { }

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: any) {
    return this.productsImage.find(x => x.ProductId == id);
  }
}