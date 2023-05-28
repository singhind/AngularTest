import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getMenu(): any[] {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:9092/api/menus';
  private typeUrl = 'http://localhost:9092/api/v1/menuTypes';
  private addCartUrl = 'http://localhost:9092/api/carts';
  constructor(private http : HttpClient) { }


  // View all Menu
  findAll(): Observable<MenuComponent[]>{
  return this.http.get<MenuComponent[]>(this.apiUrl);
  }

  // // Search Menu-items by name
  // findByMenuName(menu:any){
  //   return this.http.get('http://localhost:9092/api/menus')
  // }
  
  findMenuByTypeName(typeName: string): Observable<MenuComponent[]> {
   const url = `${this.typeUrl}/${typeName}`;
   return this.http.get<MenuComponent[]>(url);
  }

  
//  addToCart(cartItem: any): Observable<any> {
    
//     return this.http.post(this.addCartUrl, cartItem);
//   }

addToCart(cartItem: any): Observable<any> { 
    return this.http.post(this.addCartUrl, cartItem);
  }


}








































// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { MenuComponent } from '../components/menu/menu.component';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MenuService {
//   getMenu(): any[] {
//     throw new Error('Method not implemented.');
//   }
//   private apiUrl = 'http://localhost:9092/api/menus';
//   private typeUrl = 'http://localhost:9092/api/v1/menuTypes';
//   private addCartUrl = 'http://localhost:9092/api/carts';
//   constructor(private http : HttpClient) { }


//   // View all Menu
//   findAll(): Observable<MenuComponent[]>{
//   return this.http.get<MenuComponent[]>(this.apiUrl);
//   }

//   // // Search Menu-items by name
//   // findByMenuName(menu:any){
//   //   return this.http.get('http://localhost:9092/api/menus')
//   // }
  
//   findMenuByTypeName(typeName: string): Observable<MenuComponent[]> {
//    const url = `${this.typeUrl}/${typeName}`;
//    return this.http.get<MenuComponent[]>(url);
//   }

  
// //  addToCart(cartItem: any): Observable<any> {
    
// //     return this.http.post(this.addCartUrl, cartItem);
// //   }

// addToCart(cartItem: any): Observable<any> { 
//     return this.http.post(this.addCartUrl, cartItem);
//   }


// }
