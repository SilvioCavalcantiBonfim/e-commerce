import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() name: string = 'Title';
  @Input() src: string = '/assets/default.jpg'
  @Input() price: string = '0';
  @Input() bg: string = '#fff';
  @Input() discount: String = '0';

  get PRICE() {
    return Number(this.price)*(1 - Number(this.discount));
  }
}
