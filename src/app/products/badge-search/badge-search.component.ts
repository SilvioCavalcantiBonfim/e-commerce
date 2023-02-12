import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-badge-search',
  templateUrl: './badge-search.component.html',
  styleUrls: ['./badge-search.component.css']
})
export class BadgeSearchComponent {
  @Input() name: string = 'badge'; 
}
