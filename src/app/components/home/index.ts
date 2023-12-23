import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../product/index';
import { ProductService } from '../../services/product.service';
import ProductInterface from '../../types/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Product
  ],
  template: `
      <p>This demo uses following Angular features:</p>
      <ul>
        <li>&#64;Input() directive</li>
        <li>*ngFor directive</li>
        <li>*ngIf directive</li>
        <li>Injecting a service</li>
        <li>Fetching data async in a service class using Fetch API</li>
        <li>Routing</li>
      </ul>
      <hr>
      <p>Search by title: <input (input)="changeHandler(myFilter.value)" #myFilter></p>
      <div class="grid">
        <app-product
          *ngFor="let item of filteredList" [product]="item">
        </app-product>
      </div>
  `,
  styleUrl: './style.css'
})

export class Home {
  list: ProductInterface[] = [];
  filteredList: ProductInterface[] = [];

  service = inject(ProductService);

  // this function needs throttling
  changeHandler = (value:string) => {
    this.filterResults(value, [...this.list]);
  }

  filterResults = (filter: string, results: ProductInterface[]) => {
    this.filteredList = results.filter((item) => {
      return item.title.toLowerCase().includes(filter.toLowerCase());
    })
  }

  constructor() {
    this.service.getAll().then((res) => {
      this.list = res;
      this.filteredList = [...this.list];
    })
  }
}
