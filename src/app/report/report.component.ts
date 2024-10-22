import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReportService } from '../services/report/report.service';
import { Report } from '../interfaces/report';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  reportService: ReportService = inject(ReportService);
  currentTab: string = 'products'; // Default to 'products'
  products: Report[] = [];
  top: Report[] = [];
  categories: Report[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
    this.loadAll();
  }

  loadProducts(): void {
    this.reportService.getByProducts().subscribe(
      (data: Report[]) => {
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching product reports', error);
      }
    );
  }

  loadCategories(): void {
    this.reportService.getByCategory().subscribe(
      (data: Report[]) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.error('Error fetching category reports', error);
      }
    );
  }

  loadAll(): void {
    this.reportService.getTop().subscribe(
      (data: Report[]) => {
        this.top = data;
      },
      (error) => {
        console.error('error fetching top report', error);
      }
    );
  }
}
