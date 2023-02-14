import { Component} from '@angular/core';
import { products } from './product/product';
import { SearchService } from './search/search.service';

interface Category{
  title: string,
  color?: string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  All_Category_Peripherals: Category[] = [{title: "Fone"}, {title: "Teclado"}, {title: "Mouse"}, {title: "Monitor"}];
  All_Category_Component: Category[] = [{title: "Placa de Vídeo"}, {title: "HD"}, {title: "Processador"}];
  
  
  currentPeripherals: string = this.All_Category_Peripherals[0].title;
  currentComponent: string = this.All_Category_Component[0].title;
  constructor(private searchSevice: SearchService){}

  CurrentList(a: string){
    return products.filter((e) => e.NAME.toLowerCase().includes(a.toLowerCase()));
  }

  CurrentPromoList(){
    return products.filter((e) => "DISCOUNT" in e);
  }

  setCurrentPeripherals(a: string){
    this.currentPeripherals = a;
  }

  setCurrentComponent(a: string){
    this.currentComponent = a;
  }

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
