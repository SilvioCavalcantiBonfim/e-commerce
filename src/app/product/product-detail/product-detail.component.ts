import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { ProductsService } from 'src/app/products.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  _product : Product | undefined;
  amount: Number = 1;

  constructor(
    private productService: ProductsService, 
    private route: ActivatedRoute,
    private notification: NotificationService
    ){}

  ngOnInit(): void{
    this._product = this.productService.getOn(Number(this.route.snapshot.paramMap.get("ID")))
    console.log(this._product)
  }

  AddToCart(){
    this.notification.notification(`${this._product?.DESCRIPTION} adicionado ao carrinho`);
  }

}
