import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsApiService } from 'src/app/controllers/trips-api.service';
import { Trips } from 'src/app/modules/trips';

@Component({
  selector: 'app-edit-trips',
  templateUrl: './edit-trips.component.html',
  styleUrls: ['./edit-trips.component.css']
})
export class EditTripsComponent {
  trip = new Trips();
  id!:any;
  constructor(private activatedRoute:ActivatedRoute,private api:TripsApiService,private router:Router){
    this.id=this.activatedRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data:any)=>{
      this.trip=data;
    })
    let logedIn=JSON.parse(localStorage.getItem('logedIn')||'false');
    if(!logedIn){
      this.router.navigateByUrl('/error')
    }
  }
  update(){
    this.api.put(this.id,this.trip).subscribe((data:any)=>{
      this.router.navigateByUrl('/admin/trips/list');
    })
  }
}
