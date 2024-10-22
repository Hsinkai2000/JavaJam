import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from '../../interfaces/report';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getByProducts(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.url}/reportByProducts`);
  }

  getByCategory(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.url}/reportByCategory`);
  }

  getTop(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.url}/reportFull`);
  }
}
