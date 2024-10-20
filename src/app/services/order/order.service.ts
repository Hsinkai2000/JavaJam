import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  postProducts(data: any[]): Observable<string> {
    console.log(`postProducts: ${JSON.stringify(data)}`);
    return this.http.post<string>(`${this.url}/submitOrder`, data);
  }
}
