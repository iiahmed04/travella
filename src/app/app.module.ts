import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ************ modules **************
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// ****************************

// ************ user panel **************

// nav && footer of home page
import { NavbarComponent as homeNavbar } from './user_panel/shared/navbar/navbar.component';
import { FooterComponent as footerNavbar } from './user_panel/shared/footer/footer.component';

// shared nav && footer
import { NavbarComponent } from './user_panel/main/navbar/navbar.component';
import { FooterComponent } from './user_panel/main/footer/footer.component';

import { HomeComponent } from './user_panel/main/home/home.component';
import { AboutComponent } from './user_panel/main/about/about.component';
import { TripsComponent } from './user_panel/main/trips/trips.component';
import { ContactUsComponent } from './user_panel/main/contact-us/contact-us.component';

// ************ admin panel **************
import { NavbarComponent as adminNavbar } from './admin_panel/shared/navbar/navbar.component';
import { DashboardComponent } from './admin_panel/main/dashboard/dashboard.component';


import { AddTripsComponent } from './admin_panel/main/trips/add-trips/add-trips.component';
import { ListTripsComponent } from './admin_panel/main/trips/list-trips/list-trips.component';
import { EditTripsComponent } from './admin_panel/main/trips/edit-trips/edit-trips.component';
import { TripDetailesComponent } from './user_panel/main/trip-detailes/trip-detailes.component';
import { BookingComponent } from './user_panel/main/booking/booking.component';
import { BooksComponent } from './admin_panel/main/books/books.component';
import { ContactsComponent } from './admin_panel/main/contacts/contacts.component';
import { AdminsComponent } from './admin_panel/main/admins/admins.component';
import { ListAdminComponent } from './admin_panel/main/admins/list-admin/list-admin.component';
import { AddAdminComponent } from './admin_panel/main/admins/add-admin/add-admin.component';
import { EditAdminComponent } from './admin_panel/main/admins/edit-admin/edit-admin.component';
import { LoginComponent } from './admin_panel/main/admins/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    homeNavbar,
    footerNavbar,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TripsComponent,
    ContactUsComponent,
    DashboardComponent,
    adminNavbar,
    AddTripsComponent,
    ListTripsComponent,
    EditTripsComponent,
    TripDetailesComponent,
    BookingComponent,
    BooksComponent,
    ContactsComponent,
    AdminsComponent,
    ListAdminComponent,
    AddAdminComponent,
    EditAdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
