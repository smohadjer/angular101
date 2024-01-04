import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Product } from '../product/index';
import { DataService } from '../../services/data.service';
import ProductInterface from '../../types/data';

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
        <li>&#64;Input() decorator</li>
        <li>&#64;Injectable decorator to use service</li>
        <li>*ngFor directive</li>
        <li>*ngIf directive</li>
        <li>Fetching data via Fetch API</li>
        <li>Routing</li>
      </ul>
      <hr>
      <p>Search by title: <input [value]="search || ''" (input)="changeHandler(myFilter.value)" #myFilter></p>
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
  router: Router = inject(Router);

  @Input() search!: string;

  //dataservice = inject(DataService);
  timer: ReturnType<typeof setTimeout> | undefined = undefined;

  changeHandler = (value:string) => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.filterResults(value, [...this.list]);
      // add filter to url
      this.router.navigate(['/'], {queryParams: {search: value}});
    }, 500);
  }

  filterResults = (filter: string, results: ProductInterface[]) => {
    if (filter) {
      this.filteredList = results.filter((item) => {
        return item.title.toLowerCase().includes(filter.toLowerCase());
      })
    } else {
      this.filteredList = results;
    }
  }

  constructor(dataService: DataService) {
    dataService.get().then(res => {
      this.list = res;
      this.filterResults(this.search, [...this.list]);
    });
  }
}
