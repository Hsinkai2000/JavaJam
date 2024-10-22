import { Component, inject } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product/product.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { OrderService } from '../services/order/order.service';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  productService: ProductService = inject(ProductService);
  orderService: OrderService = inject(OrderService);
  productList: Product[] = [];
  menuForm: FormGroup;
  justJavaSubtotal: number = 0;
  cafeAuLaitSubtotal: number = 0;
  icedCappuccinoSubtotal: number = 0;
  total: number = 0;

  constructor() {
    // Initialize menuForm controls
    this.menuForm = new FormGroup({
      justJava: new FormControl(2),
      justJavaQuantity: new FormControl(0),
      cafeAuLait: new FormControl(0),
      cafeAuLaitQuantity: new FormControl(0),
      icedCappuccino: new FormControl(0),
      icedCappuccinoQuantity: new FormControl(0),
    });

    // Fetch products
    this.productService.getProducts().then((productList: Product[]) => {
      this.productList = productList;
      if (this.productList.length !== 0) {
        this.menuForm
          .get('cafeAuLait')
          ?.setValue(this.productList[1]?.price || 0);
        this.menuForm
          .get('icedCappuccino')
          ?.setValue(this.productList[3]?.price || 0);
      }
    });
  }

  onQuantityChange(): void {
    const justJavaQuantity = this.menuForm.get('justJavaQuantity')?.value || 0;
    const cafeAuLaitQuantity =
      this.menuForm.get('cafeAuLaitQuantity')?.value || 0;
    const icedCappuccinoQuantity =
      this.menuForm.get('icedCappuccinoQuantity')?.value || 0;

    this.justJavaSubtotal =
      justJavaQuantity * (this.productList[0]?.price || 0);
    this.cafeAuLaitSubtotal =
      cafeAuLaitQuantity * (this.menuForm.get('cafeAuLait')?.value || 0);
    this.icedCappuccinoSubtotal =
      icedCappuccinoQuantity *
      (this.menuForm.get('icedCappuccino')?.value || 0);

    this.total =
      this.justJavaSubtotal +
      this.cafeAuLaitSubtotal +
      this.icedCappuccinoSubtotal;
  }

  submitOrder(): void {
    this.orderService.postProducts(this.menuForm.value).subscribe(
      (data: any) => {
        if (data === 'Orders submitted successfully.') {
          alert('Order submitted successfully!'); // Show alert
        }
      },
      (error) => {
        console.error('Error submitting order:', error); // Optional: handle error
        alert('Order submitted successfully!'); // Optional: show error alert
      }
    );
  }
}
