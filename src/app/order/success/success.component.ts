import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  constructor(private router: Router, private http: HttpClient){}

  onTeste(): void{
    this.http.get('http://192.168.1.12:8080/product/all').subscribe(r => console.log(r))
  }

  onBack(): void{
    this.router.navigateByUrl("/home");
  }
}
