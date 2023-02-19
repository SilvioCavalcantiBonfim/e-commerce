import { Injectable } from '@angular/core';
import { Product } from '../entities/Product.entites';

@Injectable({
  providedIn: 'root'
})
export class CacheDatabaseService {

  private cache: Product[] = [];

  constructor() {
    
  }

  setCache(p: Product[]): void{
    sessionStorage.setItem("database",JSON.stringify(p));
  }


  getCache(): Product[]{
    return JSON.parse(sessionStorage.getItem("database") || "[]");
  }

  hasCache(): boolean{
    return sessionStorage.getItem("database") !== null;
  }

}
