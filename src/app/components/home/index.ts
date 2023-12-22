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
        <li>&#64;Input decorator</li>
        <li>*ngFor decorator</li>
        <li>Injecting a service</li>
        <li>Routing</li>
      </ul>
      <hr>
      <div class="grid">
        <app-product
          *ngFor="let item of list" [product]="item">
        </app-product>
      </div>
  `,
  styleUrl: './style.css'
})

export class Home {
  list: ProductInterface[] = [];

  service = inject(ProductService);

  // alternatively you can set a service simply by instantiating the class:
  // quoteService = new QuoteService();

  constructor() {
    this.list = this.service.getAll();
  }

}
