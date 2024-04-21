import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user_panel/main/home/home.component';
import { AboutComponent } from './user_panel/main/about/about.component';
import { TripsComponent } from './user_panel/main/trips/trips.component';
import { ContactUsComponent } from './user_panel/main/contact-us/contact-us.component';
import { DashboardComponent } from './admin_panel/main/dashboard/dashboard.component';
import { ListTripsComponent } from './admin_panel/main/trips/list-trips/list-trips.component';
import { AddTripsComponent } from './admin_panel/main/trips/add-trips/add-trips.component';
import { EditTripsComponent } from './admin_panel/main/trips/edit-trips/edit-trips.component';
import { TripDetailesComponent } from './user_panel/main/trip-detailes/trip-detailes.component';
import { BookingComponent } from './user_panel/main/booking/booking.component';
import { BooksComponent } from './admin_panel/main/books/books.component';
import { ContactsComponent } from './admin_panel/main/contacts/contacts.component';
import { ListAdminComponent } from './admin_panel/main/admins/list-admin/list-admin.component';
import { AddAdminComponent } from './admin_panel/main/admins/add-admin/add-admin.component';
import { EditAdminComponent } from './admin_panel/main/admins/edit-admin/edit-admin.component';
import { LoginComponent } from './admin_panel/main/admins/login/login.component';



const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch:'full'},
  {path:'home',title: "Travella", component:HomeComponent},
  {path:'about',title:"Travella | About",component:AboutComponent},
  {path:'trips',title:"Travella | Trips",component:TripsComponent},
  {path:'contactUs',title:"Travella | Contact us",component:ContactUsComponent},
  {path:'tripDetailes/:id',title:"Travella | Trip Detailes",component:TripDetailesComponent},
  {path:'booking/:id',title:"Travella | Booking",component:BookingComponent},
  {path:'login',title:"Travella | Login",component:LoginComponent},
  {path:'admin', children:[
    {path:'dashboard',title:"Travella Admin | dashboard",component:DashboardComponent},
    {path:'books',title:"Travella Admin | Books",component:BooksComponent},
    {path:'contact',title:"Travella Admin | Contacts",component:ContactsComponent},
    {path:'trips',children:[
      {path:'list',title:"Admin | Trips list",component:ListTripsComponent},
      {path:'add',title:"Admin | Add Trips",component:AddTripsComponent},
      {path:"edit/:id",title:"Admin | Edit Trips",component:EditTripsComponent}
    ]},
    {path:'admins',children:[
      {path:'list',title:"Admin | Admins list",component:ListAdminComponent},
      {path:'add',title:"Admin | Add admin",component:AddAdminComponent},
      {path:'edit/:id',title:"Admin | Edit admin",component:EditAdminComponent}
    ]}
  ]},
  {path:'**',title:'Travella',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
