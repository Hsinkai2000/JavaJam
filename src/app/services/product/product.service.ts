import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  async getProducts(): Promise<Product[]> {
    const products = await fetch(this.url + 'products');
    return (await products.json()) ?? [];
  }
}