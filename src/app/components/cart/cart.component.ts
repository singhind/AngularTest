import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any[] = [];
  menu: any[] = [];
  customer: any[] = [];
  menuType: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService, private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.findAll()
    
  }


  findAll(): void {
    this.cartService.findAll().subscribe(
     carts => {
       this.carts = carts;
     },
     error=>{
       console.error('Error retrieving menu-items:',error);
     }
    );
   }



  Remove(cartId: number): any {
    this.cartService.deleteCart(cartId).subscribe(
      (response: any) => {
        console.log('Item removed from Cart : ', response);
        this.findAll();  //After deleting we can get all the available cart items
        this.goToCartPage();
        alert('Item removed from cart');  // Display alert message
      },
      (error: any) => {
        console.error('Error removing cart item:', error);
      }
    );
  }

  goToCartPage(){
    this.router.navigate(['/cart'])
  }


  orderItem: any[] = [];
  placeOrder(carts: any, menu: any, customer: any, menuType: any){
 

  const orderItem = {
    carts: this.carts
  }
 


   this.cartService.createOrder(orderItem).subscribe(
    (response: any) => {
      
      console.log('Order Placed:', response);
      // this.orderService.getOrders();
      // this.goToOrderPage();
      alert('You Placed your order Successfully!'); // Display an alert
      // Handle success
    },
    (error: any) => {
      console.error('Error, order not placed :', error);
      // Handle error
    }
    
  );
  // this.goToOrderPage();
  }

// goToOrderPage(){
//   this.router.navigate(['/order']);
//   this.orderService.getOrders();
// }

}

































// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from 'src/app/services/cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   carts: any[] = [];
//   menu: any[] = [];
//   customer: any[] = [];
//   menuType: any[] = [];
//   totalAmount: number = 0;

//   constructor(private cartService: CartService, private router: Router) { }

//   ngOnInit(): void {
//     this.findAll()
    
//   }


//   findAll(): void {
//     this.cartService.findAll().subscribe(
//      carts => {
//        this.carts = carts;
//      },
//      error=>{
//        console.error('Error retrieving menu-items:',error);
//      }
//     );
//    }



//   Remove(cartId: number): any {
//     this.cartService.deleteCart(cartId).subscribe(
//       (response: any) => {
//         console.log('Item removed from Cart : ', response);
//         this.findAll();  //After deleting we can get all the available cart items
//         this.goToCartPage();
//         alert('Item removed from cart');  // Display alert message
//       },
//       (error: any) => {
//         console.error('Error removing cart item:', error);
//       }
//     );
//   }

//   goToCartPage(){
//     this.router.navigate(['/cart'])
//   }


//   orderItem: any[] = [];
//   placeOrder(carts: any, menu: any, customer: any, menuType: any){
//    const orderItem = {
//     carts: [
//       {
//       cartId: carts.cartId,
//     menuName: carts.menuName,
//     price: carts.price,
//     quantity: carts.quantity,
//     customer:{
//       customerId: 1,
//       customerFirstName: "Mohan",
//       customerLastName: "Kumar",
//       customerEmail: "mohan@gmail.com",
//       customerPhoneNumber: "9899896569",
//       customerUsername: "MohanKumar",
//       customerPassword: "$2a$10$QRpaGy1WiE5HP2avi1he4.dVvuzNjKN5za1Ds30weiYRgAp2XNRlW"
//     },
//     menu: {
//       menuName: menu.menuName,
//       price: menu.menuPrice,
//       menuImage: menu.menuImage,
//       menuType: {
//         typeName: menuType.typeName,
//         description: menuType.description
//       }
//     }
//   }
//   ]
//   }

//    this.cartService.createOrder(orderItem).subscribe(
//     (response: any) => {
//       console.log('Order Placed:', response);
//       alert('You Placed your order Successfully!'); // Display an alert
//       // Handle success
//     },
//     (error: any) => {
//       console.error('Error, order not placed :', error);
//       // Handle error
//     }
//   );
//   }



// }































// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from 'src/app/services/cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   carts: any[] = [];

//   constructor(private cartService: CartService, private router: Router) { }

//   ngOnInit(): void {
//     this.findAll()
    
//   }


//   findAll(): void {
//     this.cartService.findAll().subscribe(
//      carts => {
//        this.carts = carts;
//      },
//      error=>{
//        console.error('Error retrieving menu-items:',error);
//      }
//     );
//    }



//   Remove(cartId: number): any {
//     this.cartService.deleteCart(cartId).subscribe(
//       (response: any) => {
//         console.log('Item removed from Cart : ', response);
//         this.findAll();  //After deleting we can get all the available cart items
//         this.goToCartPage();
//         alert('Item removed from cart');  // Display alert message
//       },
//       (error: any) => {
//         console.error('Error removing cart item:', error);
//       }
//     );
//   }

//   goToCartPage(){
//     this.router.navigate(['/cart'])
//   }

// }