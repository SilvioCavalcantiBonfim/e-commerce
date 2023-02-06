import { Injectable } from '@angular/core';
import { Product, produtos } from './product/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = produtos;

  getAll(){
    return this.products;
  }

  getOn(ID: Number){
    return this.products.find(p => p.ID === ID);
  }

  constructor() { }
}
