
import { Component} from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup:FormGroup|any;

 

  customerFirstName:string="";
  customerLastName:string="";
  customerEmail:string="";
  customerPhoneNumber:string="";
  customerUsername:string="";
  customerPassword:string="";
  

  constructor(
    private router:Router,
    private http:HttpClient){

  }

  save(){
    console.log('Inside Save')
    let bodyData = {
      "customerFirstName": this.customerFirstName,
      "customerLastName": this.customerLastName,
      "customerEmail": this.customerEmail,
      "customerPhoneNumber":this.customerPhoneNumber,
      "customerUsername":this.customerUsername,
      "customerPassword":this.customerPassword
    };
    this.http.post("http://localhost:9092/api/signup", bodyData,{responseType:'text'}).subscribe((resultData:any)=>{
      console.log(resultData);
      alert("Congratulation!! You Registered Successfully");
      this.goToLogin();
    },
    error=>{
      console.log(error);
      alert("Something went wrong!! Please enter valid 10 digit Phone No. & Email")
    }
    );
  }

  goToLogin(){
    this.router.navigate(['/login']);

  } 
}





























// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit{

//   constructor() { } 
//   signup:FormGroup|any;
   
//     ngOnInit(): void{
//     this.signup=new FormGroup({
//     'fname':new FormControl(),
//     'lname': new FormControl(),
//     'email':new FormControl(),
//     'pnumber': new FormControl(),
//     'uname':new FormControl(),
//     'password': new FormControl()
//       })

//     }
//     signupdata(signup:FormGroup){
//       console.log(this.signup.value);
//   }
// }