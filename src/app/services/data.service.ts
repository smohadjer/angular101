import { Injectable } from '@angular/core';

import DataInterface from '../types/data';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  url = 'https://dummyjson.com/products';

  products: DataInterface[] = [];

  async get() {
    // since fetchData is async, data may not be available when our service methods
   // are called, hence we check for that and invoke fetchData with await if
   // data is not fetched yet.
    if (this.products.length === 0) {
      await this.fetchData();
    }
    return this.products;
  }

  async getById(id: number) {
    if (this.products.length === 0) {
      await this.fetchData();
    }
    return this.products.find(item => item.id === id);
  }

  async fetchData() {
    const data = await fetch(this.url);
    const json = await data.json() ?? [];
    this.products = json.products;
  }

  constructor() {
    this.fetchData();
  }
}
