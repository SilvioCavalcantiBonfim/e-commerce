import { Component, Input } from '@angular/core';
import { Product, products } from '../product/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category: string = "";
  @Input() title: string = "";
  @Input() bg: string = '#fff';

  get Products_list() {
    const a = products.filter((e) => e.NAME.toLowerCase().includes(this.category.toLowerCase()))
    console.log(a.map(e => "CURRENTVALUE" in e))
    return a;
  }
}
