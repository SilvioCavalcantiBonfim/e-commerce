import { Injectable } from '@angular/core';
import { Product, products } from '../entities/Product.entites';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  query: string[] = [];
  
  products_list: Product[] = products;

  constructor() { }
  
  setQueryList(e: Event): void{
    this.query = (e.target as HTMLInputElement).value.split(" ").filter(e => e !== '');
    this.products_list = (this.query.length !== 0)? products.filter(e => this.query.map(ee => e.NAME.toLowerCase().includes(ee)).indexOf(true) !== -1): products;
  }
}
