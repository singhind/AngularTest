import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartComponent } from '../components/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  getCarts(): Observable<CartComponent[]> {
    return this.http.get<CartComponent[]>(this.apiUrl);
  }
  private apiUrl = 'http://localhost:9092/api/carts'; 
  private removeCartUrl = 'http://localhost:9092/api/carts'; 
  private createOrderUrl = 'http://localhost:9092/api/orders';

  constructor(private http: HttpClient) { }

  // addToCart(cart: Cart): Observable<Cart> {
  //   return this.http.post<Cart>(this.apiUrl, cart);
  // }

 

  findAll(): Observable<CartComponent[]>{
    return this.http.get<CartComponent[]>(this.apiUrl);
    }
   

    deleteCart(cartId: number): Observable<any> {
      const url = `${this.removeCartUrl}/${cartId}`;
      return this.http.delete<void>(url);
    }


    createOrder(orderItem: any): Observable<any> {
      return this.http.post(this.createOrderUrl, orderItem);
    }

   

}






































// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { CartComponent } from '../components/cart/cart.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   // deleteCart(cartId: number) {
//   //   throw new Error('Method not implemented.');
//   // }
//   getCarts(): Observable<CartComponent[]> {
//     return this.http.get<CartComponent[]>(this.apiUrl);
//   }
//   private apiUrl = 'http://localhost:9092/api/carts'; 
//   private removeCartUrl = 'http://localhost:9092/api/carts'; 


//   constructor(private http: HttpClient) { }

//   // addToCart(cart: Cart): Observable<Cart> {
//   //   return this.http.post<Cart>(this.apiUrl, cart);
//   // }

 

//   findAll(): Observable<CartComponent[]>{
//     return this.http.get<CartComponent[]>(this.apiUrl);
//     }


//     deleteCart(cartId: number): Observable<void> {
//       const url = `${this.removeCartUrl}/${cartId}`;
//       return this.http.delete<void>(url);
//     }


// }






























// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor(private http : HttpClient) {
    
//    }

//   //  Add Menu-items to Cart
//    create(cart:any){

//    }

//   //  Delete from Cart
//   deleteById(cartId: any){
    
//   }

// }
