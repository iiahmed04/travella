import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripsApiService } from 'src/app/controllers/trips-api.service';
import { Trips } from 'src/app/modules/trips';

@Component({
  selector: 'app-add-trips',
  templateUrl: './add-trips.component.html',
  styleUrls: ['./add-trips.component.css']
})
export class AddTripsComponent {
  trip = new Trips();

  constructor(public api:TripsApiService,private router:Router){
    let logedIn=JSON.parse(localStorage.getItem('logedIn')||'false');
    if(!logedIn){
      this.router.navigateByUrl('/error')
    }
  }
  submit(){
    this.api.post(this.trip).subscribe((data:any)=>{
      this.router.navigateByUrl('/admin/trips/list')
    })
  }
}
