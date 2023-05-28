import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
menu: any[] = [];
customer: any[] = [];
findByMenu: any[] = [];
menuType: string[] =[]; //Assuming you have a list of available menu-Types
selectedMenuType: string ='';
searchTerm: string= '';

constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.findAll();
    
    //Fetch the available menu-types from the service and backend
    this.menuType= ['Veg-items', 'Non-veg items', 'Drinks', 'Deserts'];

    //Fetch all menu initially
    this.findMenuByTypeName();

  }


  
  findAll(): void {
   this.menuService.findAll().subscribe(
    menu => {
      this.menu = menu;
    },
    error=>{
      console.error('Error retrieving menu-items:',error);
    }
   );
  }




  // search for menu
  findMenuByName(){
    
      if (this.searchTerm) {
        // Filter the menus based on the search term
        this.findByMenu = this.menu.filter(menu =>
          menu.menuName.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        // If no search term, display all menus
        this.findByMenu = this.menu;
      }
    }

    

    cartItem: any[] = [];
addToCart(menu: any, customer: any) {
 
  const cartItem={
    
    quantity: menu.quantity,
    customer: {
        customerId: 1
    },
    menu: {
        menuName: menu.menuName,
    }
}

    this.menuService.addToCart(cartItem).subscribe(
      (response: any) => {
        console.log('Item added to cart:', response);
        alert('Item added to cart!'); // Display an alert
        // Handle success
      },
      (error: any) => {
        console.error('Error adding item to cart:', error);
        // Handle error
      }
    );
  }

  


  
  findMenuByTypeName() {
   if(this.selectedMenuType){
    // If a menu-typ is selected, fetch  menu by category
    this.menuService.findMenuByTypeName(this.selectedMenuType).subscribe(menu=> {
      this.menu = menu;
      this.findByMenu = this.menu; //Update filtered menu as well
    });
   }else{
    //if no menu-type is selected, fetch all menu
    this.menuService.findAll().subscribe(menu=>{
      this.menu = menu;
      this.findByMenu = this.menu; //update filtered Menu as well
    });
   }
  }

}
