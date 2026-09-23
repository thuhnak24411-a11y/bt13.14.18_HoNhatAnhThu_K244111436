import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  datas = [
    {
      "Cateid": "cate1", 
      "CateName": "nuoc ngot",
      "Products": [
        { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "assets/coca.jpeg" },
        { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "assets/pepsi.jpeg" },
        { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "assets/sting.jpeg" }
      ]
    },
    {
      "Cateid": "cate2", 
      "CateName": "Bia",
      "Products": [
        // Sửa tên ảnh cho khớp với file thực tế của bạn
        { "ProductId": "p4", "ProductName": "Heleiken", "Price": 500, "Image": "assets/heineken.jpeg" },
        { "ProductId": "p5", "ProductName": "333", "Price": 400, "Image": "assets/333.jpeg" },
        { "ProductId": "p6", "ProductName": "Sai Gon", "Price": 600, "Image": "assets/saigon.jpeg" }
      ]
    }
  ];

  constructor() { }

  getCategories() {
    return this.datas;
  }
}