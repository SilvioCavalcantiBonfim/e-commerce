import { Injectable } from '@angular/core';
import { Product, products } from '../entities/Product.entites';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  query: string[] = [];
  
  products_list: Product[] = [];

  constructor() {
      this.products_list = products;
   }
  
  setQueryList(e: Event): void{
    this.query = (e.target as HTMLInputElement).value.toLowerCase().split(" ").filter(e => e !== '');
    this.products_list = products.filter(e => this.query.map(ee => e.name.toLowerCase().includes(ee)).indexOf(true) !== -1);
  }
}
