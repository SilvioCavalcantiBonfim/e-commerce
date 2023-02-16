import { Component, Input } from '@angular/core';
import { Product } from 'src/app/entities/Product.entites';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() bg: string = '#fff';
  @Input() products_list: Product[] = [];
}
