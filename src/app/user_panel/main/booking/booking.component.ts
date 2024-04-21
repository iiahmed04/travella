import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingApiService } from 'src/app/controllers/booking-api.service';
import { TripsApiService } from 'src/app/controllers/trips-api.service';
import { Booking } from 'src/app/modules/booking';
import { Trips } from 'src/app/modules/trips';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  url!:any;
  title!:any;
  message:string='';
  book=new Booking();
  id!:any;
  trip=new Trips();
  constructor(public api:BookingApiService,private router:Router,activatedRoute:ActivatedRoute,public api2:TripsApiService){
    this.id=activatedRoute.snapshot.params['id'];
    this.api2.getById(this.id).subscribe((data:any)=>{
      this.trip=data;
      this.book.tripName=this.trip.name;
      this.book.price=this.trip.price;
    })
  }
  submit(){
    this.api.post(this.book).subscribe((data:any)=>{
      this.message='Your trip has been added successfully'
    })
  }
}
