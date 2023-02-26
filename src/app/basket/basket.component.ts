import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  constructor(private basket: BasketService, private router: Router){ 
  }
  get orderList(){
    return this.basket.BasketList;
  }
  get orderExist(){
    return this.basket.BasketList.length > 0;
  }
  get Total(): number{
    return this.basket.TotalBasket;
  }
  get FontSize(): number {
    const FS = 22 - 2*(Math.round(Math.log10(this.Total)) - 3)
    return (FS > 24)? 24:FS;
  }
  onSubmit(): void{
    this.basket.Clear();
    this.router.navigateByUrl("/order/success");
  }
}
