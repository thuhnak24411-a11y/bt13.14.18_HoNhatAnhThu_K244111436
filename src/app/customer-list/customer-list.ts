import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer'; // Import từ '../customer'

@Component({
  selector: 'app-customer-list',
  standalone: false, // BẮT BUỘC PHẢI LÀ FALSE
  templateUrl: './customer-list.html',
  styleUrls: ['./customer-list.css']
})
export class CustomerListComponent implements OnInit {
  public customerTypes: any[] = [];

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
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customerTypes = Array.isArray(data) ? data : [];
      },
      error: (err) => {
        console.error('Lỗi khi tải dữ liệu khách hàng:', err);
        this.customerTypes = [];
      }
    });
  }
}