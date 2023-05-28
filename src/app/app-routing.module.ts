import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';

// import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [ 

  {path:'', component:HomeComponent},
  // {path:'dashboard', component:DashboardComponent},
   {path:'home', component:HomeComponent},
   {path:'menu', component:MenuComponent},
   {path:'signup', component:SignupComponent},
   {path:'login', component:LoginComponent},
  //  {path: 'order-page', component:OrderPageComponent},
  // //  {path:'login/menu', component: MenuComponent},
  // //  {path:'menu/vechile-page', component:VechilePageComponent},
  // //  {path:'menu/warhouse-page', component:WarhousePageComponent},
  // //  {path:'menu/otherservicespage', component:OtherservicespageComponent},
  // //  {path:'menu/office-page', component:OfficePageComponent},
  // //  {path:'menu/cleaning', component:CleaningComponent},
  //  {path:'cart', component:CartComponent},
   {path:'cart', component:CartComponent},
   {path:'order', component:OrderComponent},
  //  {path:'logout', component:LogoutComponent},
  //  {path:'bill-page', component:BillPageComponent}

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
