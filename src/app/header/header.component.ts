import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: string = 'user';
  search: string = '';

  constructor(private searchSevice: SearchService){}

  onSearch = (e: any): void => this.searchSevice.setQueryList(e); 
}
