import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer'; // Import từ '../customer'

@Component({
  selector: 'app-customer-list',
  standalone: false, // BẮT BUỘC PHẢI LÀ FALSE
  templateUrl: './customer-list.html',
  styleUrls: ['./customer-list.css']
})
export class CustomerListComponent implements OnInit {
  public customerTypes: any[] = [
    {
      CustomerTypeId: 1,
      CustomterTypeName: 'VIP',
      Customers: [
        { Id: 'Cus123', Name: 'Nguyễn Văn A', Email: 'nguyenvana@gmail.com', Age: 35, Image: '/assets/nguyenvana.jpeg' },
        { Id: 'Cus456', Name: 'Trần Thị B', Email: 'tranthib@gmail.com', Age: 28, Image: '/assets/tranthib.avif' },
        { Id: 'Cus789', Name: 'Lê Văn C', Email: 'levanc@gmail.com', Age: 42, Image: '/assets/levanc.jpg' }
      ]
    },
    {
      CustomerTypeId: 2,
      CustomterTypeName: 'Normal',
      Customers: [
        { Id: 'Cus000', Name: 'Phạm Minh D', Email: 'phamminhd@gmail.com', Age: 22, Image: '/assets/phamminhd.jpeg' },
        { Id: 'Cus111', Name: 'Hoàng Anh E', Email: 'hoanganhe@gmail.com', Age: 30, Image: '/assets/hoanganhe.jpg' }
      ]
    }
  ];

  private readonly imageMap: Record<string, string> = {
    Cus123: '/assets/nguyenvana.jpeg',
    Cus456: '/assets/tranthib.avif',
    Cus789: '/assets/levanc.jpg',
    Cus000: '/assets/phamminhd.jpeg',
    Cus111: '/assets/hoanganhe.jpg'
  };

  constructor(private customerService: CustomerService) { }

  getImageUrl(cus: any): string {
    if (!cus) {
      return '/assets/333.jpeg';
    }
    return this.imageMap[cus.Id] || cus.Image || '/assets/333.jpeg';
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.style.display = 'none';
    }
  }

  trackByType(index: number, item: any): number {
    return item?.CustomerTypeId ?? index;
  }

  trackByCustomer(index: number, item: any): string {
    return item?.Id ?? `${index}`;
  }

  ngOnInit(): void {
    // Dữ liệu được gán trực tiếp để luôn hiển thị, tránh lỗi khi gọi HTTP không trả về kịp.
  }
}