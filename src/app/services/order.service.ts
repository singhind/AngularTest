import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:9092/api/orders';
  private cancelOrderUrl = 'http://localhost:9092/api/orders';
 
  constructor(private http: HttpClient) { }


  // getOrders(): Observable<OrdersComponent[]> {
  //   return this.http.get<OrdersComponent[]>(this.apiUrl);
  // }
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  cancelOrder(orderId: number): Observable<any>{
    const url = `${this.cancelOrderUrl}/${orderId}`;
    return this.http.delete<void>(url);
  }

  
  }
