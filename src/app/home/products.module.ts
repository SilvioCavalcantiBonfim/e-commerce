import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { BadgeSearchComponent } from './badge-search/badge-search.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    BadgeSearchComponent,
    CategoryComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
