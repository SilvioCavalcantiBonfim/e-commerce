"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[592],{1489:(i,o,a)=>{a.d(o,{v:()=>s});class u{constructor(t,e){this.amount=t,this.product=e}addAmount(t){this.amount+=t}get Amount(){return this.amount}get Product(){return this.product}}var c=a(8256);class s{constructor(){this._basket=[]}isEmpty(){return 0===this._basket.length}countItens(){return this._basket.length}add2Basket(t){const e=this._basket.filter(r=>r.Product.id===t.id);if(0===e.length){const r=new u(1,t);this._basket.push(r)}else e[0].addAmount(1)}remove2Basket(t){this._basket=this._basket.filter(e=>e.Product.id!==t.id)}Clear(){this._basket=[]}get TotalBasket(){var t=0;return this._basket.forEach(e=>{var r=e.Product.price*e.Amount;void 0!==e.Product.discount&&(r*=1-e.Product.discount),t+=r}),t}get BasketList(){return this._basket}}s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}}]);