import { Product } from "./Product.entites";

export class BasketItem{
    private amount: number;
    private product: Product;
  
    constructor(_amount: number, _product: Product){
      this.amount = _amount;
      this.product = _product;
    }
  
    public addAmount(a: number){
      this.amount += a;
    }
    public get Amount() : number {
      return this.amount;
    }
    public get Product() : Product {
      return this.product;
    } 
  }