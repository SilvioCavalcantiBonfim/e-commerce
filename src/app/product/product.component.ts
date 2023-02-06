import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product, produtos } from './products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  
  products: Product[] | undefined;

  constructor(private productService: ProductsService){}

  ngOnInit(): void{
    this.products = this.productService.getAll();
  }
}
