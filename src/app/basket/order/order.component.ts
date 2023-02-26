import { Component, Input } from '@angular/core';
import { BasketItem } from 'src/app/entities/Basket.entities';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input() order: BasketItem | any;

  constructor(private basket: BasketService){

  }

  get discountEnable(): boolean{
    return this.order.Product.discount !== 0;
  }

  get Economy(): number{
    return this.order.Amount*this.order.Product.price - this.price;
  }

  get price(): number{
    var value: number = this.order.Product.price*(1-this.order.Product.discount);
    return value*this.order.Amount;
  }

  onDecrement(): void{
    if(this.order.Amount > 1)
      this.order.addAmount(-1);
    else
      this.basket.remove2Basket(this.order.Product);
  }
}
