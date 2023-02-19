import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/Product.entites';
import { CacheDatabaseService } from '../services/cache-database.service';
import { SearchService } from '../services/search.service';

interface Category {
  title: string,
  color?: string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products: Product[] = [];

  All_Category_Peripherals: Category[] = [{ title: "Fone" }, { title: "Teclado" }, { title: "Mouse" }, { title: "Monitor" }];
  All_Category_Component: Category[] = [{ title: "Placa de Vídeo" }, { title: "HD" }, { title: "Processador" }];

  Query_is_enable: boolean = false;

  errorMode: boolean = false;
  

  currentPeripherals: string = this.All_Category_Peripherals[0].title;
  currentComponent: string = this.All_Category_Component[0].title;

  constructor(private http: HttpClient, private cache: CacheDatabaseService) { }

  ngOnInit(): void {
    if (!this.cache.hasCache()) {
      this.http.get('http://192.168.1.12:8080/product/all').subscribe(r => {
        this.products = Object.values(r);
        this.cache.setCache(this.products);
      }, (error: any) => {this.errorMode=true})
    }else{
      console.log(this.cache.getCache())
      this.products = this.cache.getCache();
    }
  }

  CurrentList(a: string) {
    return this.products.filter((e) => e.name.toLowerCase().includes(a.toLowerCase()));
  }

  CurrentPromoList() {
    return this.products.filter((e) => e.descount != 0);
  }

  setCurrentPeripherals(a: string) {
    this.currentPeripherals = a;
  }

  setCurrentComponent(a: string) {
    this.currentComponent = a;
  }

  get Products_list() {
    return this.products;
  }
  // get Products_is_enable (){
  //   return this.searchSevice.products_list.length > 0;
  // }
  // get Query_list (){
  //   return this.searchSevice.query;
  // }
  // get Query_is_enable(){
  //   return this.searchSevice.query.length > 0;
  // }
}
