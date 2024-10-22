import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../services/product/product.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-priceupdate',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './priceupdate.component.html',
  styleUrls: ['./priceupdate.component.scss'], // Fixed 'styleUrl' to 'styleUrls'
})
export class PriceupdateComponent {
  productService: ProductService = inject(ProductService);
  priceForm: FormGroup;
  productList: Product[] = [];

  constructor() {
    // Initialize the form
    this.priceForm = new FormGroup({});

    // Fetch products
    this.productService.getProducts().then((productList: Product[]) => {
      this.productList = productList;

      // Dynamically create form controls based on product IDs
      productList.forEach((product) => {
        this.priceForm.addControl(
          product.id.toString(),
          new FormControl(product.price)
        );
      });
    });
  }

  submitOrder() {
    this.productService.updateProduct(this.priceForm.value).subscribe(
      (data: any) => {
        if (data.includes('updated successfully')) {
          // Adjust this condition to match your response
          alert('Prices updated successfully!'); // Show alert
        }
      },
      (error) => {
        console.error('Error submitting order:', error);
        alert('Error updating prices!'); // Show error alert
      }
    );
  }
}
