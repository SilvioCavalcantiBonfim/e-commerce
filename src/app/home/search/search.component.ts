import { Component } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  username: string = 'user';
  search: string = '';

  constructor(private searchSevice: SearchService, private basket: BasketService){}
  
  get basketCount(){
    return this.basket.countItens();
  }

  get basketIsEmpty(){
    return this.basket.isEmpty();
  }

  onSearch = (e: any): void => this.searchSevice.setQueryList(e); 
}
