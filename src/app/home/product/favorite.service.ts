import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  
  private favorites: string[] = [];

  constructor() { 
    const _aux = localStorage.getItem("favorites") || "[]";
    this.favorites = JSON.parse(_aux);
    this.updateFavorites();
  }
  private updateFavorites() : void{
    localStorage.setItem("favorites",JSON.stringify(this.favorites));
  }
  public Add2Favorites(id: string): void{
    this.favorites.push(id);
    this.updateFavorites();
  }
  public Remove2Favorites(id: string): void{
    this.favorites = this.favorites.filter(e => e!== id);
    this.updateFavorites();
  }
  public isFavorite(id: string): boolean{
    return this.favorites.includes(id);
  }


}
