import { Component, Input} from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{ 
  @Input() bg: string = "";
  @Input() product: Product | any;
  get promo_enable() {
    return "DISCOUNT" in this.product;
  }
}
