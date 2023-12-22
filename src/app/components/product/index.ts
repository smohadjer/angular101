import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import ProductInterface from '../../types/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
    <div class="product">
      <h3>{{product.title}}</h3>
      <a [routerLink]="['/details', product.id]"><img src="{{product.thumbnail}}" alt=""/></a>
      <p>{{product.description}}</p>
      <p><a [routerLink]="['/details', product.id]">Learn More</a></p>
    </div>
  `,
  styleUrl: './style.css'
})

export class Product {
  @Input() product!: ProductInterface;

  constructor() {

  }
}
