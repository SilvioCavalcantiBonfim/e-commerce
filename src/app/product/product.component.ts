import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, products } from '../products/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product | any;
  amount: number = 1;
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.product = products.find(e => e.ID === this.route.snapshot.paramMap.get("id"));
    this.product === undefined && this.router.navigateByUrl("/");
    console.log(this.product);
  }

  onBack = (): void => {
    this.router.navigateByUrl("/");
  }

  increment = (): void => {
    this.amount++;
  }
  decrement = (): void => {
    if(this.amount > 1) this.amount--;
  }
}
