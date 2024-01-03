import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { Product } from '../product/index';
import { DataService } from '../../services/data.service';
import ProductInterface from '../../types/data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    Product
  ],
  template: `
    <p><a [routerLink]="['/']">Home</a></p>
    <div class="flex" *ngIf="product">
      <img src="{{product.thumbnail}}" alt=""/>
      <table>
        <tr><td>Product</td><td>{{product.title}}</td></tr>
        <tr><td>Description</td><td>{{product.description}}</td></tr>
        <tr><td>Category</td><td>{{product.title}}</td></tr>
        <tr><td>Price</td><td>{{product.price}}</td></tr>
        <tr><td>Rating</td><td>{{product.rating}}</td></tr>
        <tr><td>Brand</td><td>{{product.brand}}</td></tr>
        <tr><td>Stock</td><td>{{product.stock}}</td></tr>
      </table>
    </div>
  `,
  styleUrl: './style.css'
})

export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  productId = -1;
  product: ProductInterface | undefined;

  service = inject(DataService);

  constructor() {
    this.productId = Number(this.route.snapshot.params['id']);
    this.service.getById(this.productId).then((product) => {
      this.product = product;
    })
  }
}
