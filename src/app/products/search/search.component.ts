import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  username: string = 'user';
  search: string = '';

  constructor(private searchSevice: SearchService){}

  onSearch = (e: any): void => this.searchSevice.setQueryList(e); 
}
