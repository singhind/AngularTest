import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any[] = [];
  carts: CartComponent[] = []; // Assuming you have an array of Cart objects
  finalPrice :number=0;


  constructor(private orderService:OrderService, private router: Router) { }
  ngOnInit(): void {
    this.getOrders();

  }
  getOrders(): void {
    this.orderService.getOrders().subscribe(
      orders => {
        this.orders = orders;
        console.log("All items present in Cart");
        
      },
      error => {
        console.error('Error retrieving menu:', error);
      }
    );
  }

  cancelOrder(orderId: number):any{
    this.orderService.cancelOrder(orderId).subscribe(
      (response: any)=> {
        console.log("Order Cancelled : ", response);
        alert("Your order is Cancelled");
        this.getOrders();

      }
    )  
  }

  goToOrderPage(){
    this.router.navigate(['/order'])
  }


}
