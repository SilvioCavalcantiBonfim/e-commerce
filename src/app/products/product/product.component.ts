import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() name: string = 'Title';
  @Input() src: string = '/assets/default.jpg'
  @Input() price: string = '';
}
