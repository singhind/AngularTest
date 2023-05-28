import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  logincust:FormGroup|any;


 customerUsername:string="";
 customerPassword:string="";


  constructor(private loginService: LoginService,
    private router:Router,
    private http:HttpClient){

  }


  login(){
    let bodyData ={
      customerUsername:this.customerUsername,
      customerPassword:this.customerPassword
    };
    console.log(bodyData);
    // this.http.post("http://localhost:9092/api/login",bodyData,  {responseType: 'text'}).subscribe(response=>{
    //   // localStorage.setItem('loggedInUsername', this.customerUsername);
    //   // localStorage.setItem('loggedIn', this.customerUsername);
    // console.log(response);
      this.goToHomePage();
    //   // if (response === "Login successful") {
        alert("You Login Successfully!!");

    // },

    
    // error=>{
    //   console.log(error);
    //   alert("Invalid username or password")
    // }
    // );
  }
 goToHomePage(){
  this.router.navigate(['/home']);
 }


 login22(){
  this.loginService.login('admin', 'admin');
  this.goToHomePage();
 }




}





























// login(){
//   console.log(this.customerUsername);
//   console.log(this.customerPassword);
  
//   let bodyData ={
//     customerUsername:this.customerUsername,
//     customerPassword:this.customerPassword
//   };
  
//   this.http.post("http://localhost:9092/api/login",bodyData).subscribe( (resultData: any) => {
//     console.log(resultData);
//     if (resultData.message == "Password not Exists") {
//       alert("Password not exists");
  
//     } 
//     else if(resultData.message =="Login Success")
//     {
//       this.router.navigate(['/home']);
//     }

//  else{
//     alert("Invalid username or password not match")
//   }
  
// });

// }
// }





















// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   login:FormGroup|any;
//   constructor() { } 

//   ngOnInit(): void{
//     this.login=new FormGroup({
//     'uname':new FormControl(),
//     'password': new FormControl()
//     })
//   }
//   logindata(login:FormGroup){
//   console.log(this.login.value);
//   }

// }
