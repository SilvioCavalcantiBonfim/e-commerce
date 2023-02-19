import { Injectable } from '@angular/core';
import { BasketItem } from '../entities/Basket.entities';
import { Product } from '../entities/Product.entites';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private _basket: BasketItem[] = [];
  constructor() { }

  public isEmpty(): boolean{
    return this._basket.length === 0;
  }
  public countItens(): number{
    return this._basket.length;
  }
  public add2Basket(_product: Product): void{
    const _aux = this._basket.filter(e => e.Product.id === _product.id);
    if(_aux.length === 0){
      const newItem = new BasketItem(1, _product);
      this._basket.push(newItem);
    }else{
      _aux[0].addAmount(1);
    }
  }
  
  public remove2Basket(_product: Product): void{
    this._basket = this._basket.filter(e => e.Product.id !== _product.id);
  }

  public Clear(): void{
    this._basket = [];
  }

  public get TotalBasket(): number{
    var _v: number = 0;
    this._basket.forEach(e => {
      var current = e.Product.price*e.Amount;
      if(e.Product.descount !== undefined)
        current *= (1 - e.Product.descount);
      _v += current;
    });
    return _v;
  }

  public get BasketList() : BasketItem[] {
    return this._basket;
  }
  
}
