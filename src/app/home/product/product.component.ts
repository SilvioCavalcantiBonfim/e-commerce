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
  // isFavority: boolean = false;

  constructor(private favorites: FavoriteService, private basket: BasketService){}

  get isFavority() {
    return this.favorites.isFavorite(this.product.ID);
  }

  get promo_enable() {
    return "DISCOUNT" in this.product;
  }

  onAddBasket(){
    this.basket.add2Basket(this.product);
  }

  onAddFavority(): void{
    !this.favorites.isFavorite(this.product.ID)?this.favorites.Add2Favorites(this.product.ID):this.favorites.Remove2Favorites(this.product.ID)
  }

  ngOnInit(): void {
    
  } 
}
