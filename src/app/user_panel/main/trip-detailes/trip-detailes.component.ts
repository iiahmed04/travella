import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsApiService } from 'src/app/controllers/trips-api.service';
import { Trips } from 'src/app/modules/trips';


@Component({
  selector: 'app-trip-detailes',
  templateUrl: './trip-detailes.component.html',
  styleUrls: ['./trip-detailes.component.css']
})
export class TripDetailesComponent {
  trip=new Trips();
  id!:any;
  constructor(private tripsService :TripsApiService,private activatedRoute:ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.tripsService.getById(this.id).subscribe((data:any)=>{
      this.trip=data;
    })
  }
}
