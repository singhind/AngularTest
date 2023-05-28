import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  

title:string= 'Food Ordering'; 
public isShown:boolean= false;

// constructor(private route: Router) {
 
//  }
userName: string | any;
constructor(private loginService: LoginService) {
  loginService.getLoggedInName.subscribe(name => {
    this.changeName(name)
  });
}

private changeName(name: string): void {
  this.userName = name;
  if(name=="SUCCESS"){
    this.isShown = true;
  }else{
    this.isShown = false;
  }
}


ngOnInit(): void {
    
}


toggleShow() {

  // this.isShown = ! this.isShown;
  
  }

  logout(){
    this.loginService.logout();
  }
}


















// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit{
// menuType: String='default';
// constructor(private route: Router){ }

// ngOnInit(): void {
//     this.route.events.subscribe((val:any)=>{
   
//       if(val.url){
//         console.warn(val.url)
//         if(localStorage.getItem('home') && val.url.includes('home')){
//           console.warn("in home area")
//         }else{
//           console.warn("outside home")
//           this.menuType='default'
//         }
//       }
    
//     })
// }
// }











































































