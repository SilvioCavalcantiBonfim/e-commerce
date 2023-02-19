import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, products } from '../entities/Product.entites';
import { CacheDatabaseService } from './cache-database.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  query: string[] = [];
  
  products_list: Product[] = [];

  constructor() {
      
   }
  
  setQueryList(e: Event): void{
    this.query = (e.target as HTMLInputElement).value.split(" ").filter(e => e !== '');
    this.products_list = (this.query.length !== 0)? this.products_list.filter(e => this.query.map(ee => e.name.toLowerCase().includes(ee)).indexOf(true) !== -1): this.products_list;
  }
}
