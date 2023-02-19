import { Component, Input, OnInit} from '@angular/core';
import { Product } from 'src/app/entities/Product.entites';
import { BasketService } from 'src/app/services/basket.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{ 
  @Input() bg: string = "";
  @Input() product: Product | any;

  constructor(private favorites: FavoriteService, private basket: BasketService){}

  get isFavority() {
    return this.favorites.isFavorite(this.product.id);
  }

  get promo_enable() {
    return this.product.descount !== 0;
  }

  onAddBasket(){
    this.basket.add2Basket(this.product);
  }

  onAddFavority(): void{
    !this.favorites.isFavorite(this.product.id)?this.favorites.Add2Favorites(this.product.id):this.favorites.Remove2Favorites(this.product.id)
  }

  ngOnInit(): void {
    
  } 
}
