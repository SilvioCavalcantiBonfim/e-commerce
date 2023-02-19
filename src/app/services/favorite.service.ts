import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favorites: number[] = [];

  constructor() { 
    this.favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    this.updateFavorites();
  }
  private updateFavorites() : void{
    localStorage.setItem("favorites",JSON.stringify(this.favorites));
  }
  public Add2Favorites(id: number): void{
    this.favorites.push(id);
    this.updateFavorites();
  }
  public Remove2Favorites(id: number): void{
    this.favorites = this.favorites.filter(e => e!== id);
    this.updateFavorites();
  }
  public isFavorite(id: number): boolean{
    return this.favorites.includes(id);
  }

} 
