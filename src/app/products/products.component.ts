import { Component} from '@angular/core';
import { SearchService } from '../header/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  constructor(private searchSevice: SearchService){}

  get Products_list (){
    return this.searchSevice.products_list;
  }
  get Products_is_enable (){
    return this.searchSevice.products_list.length > 0;
  }
  get Query_list (){
    return this.searchSevice.query;
  }
  get Query_is_enable(){
    return this.searchSevice.query.length > 0;
  }
}
