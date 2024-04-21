import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripsApiService } from 'src/app/controllers/trips-api.service';

@Component({
  selector: 'app-list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.css']
})
export class ListTripsComponent {
  trips!:any[];
  constructor(private api:TripsApiService,private router:Router){
    this.getAllData();
    let logedIn=JSON.parse(localStorage.getItem('logedIn')||'false');
    if(!logedIn){
      this.router.navigateByUrl('/error')
    }
  }
  getAllData(){
    this.api.get().subscribe((data:any)=>{
      this.trips=data;
    })
  }
  remove(id:any){
    this.api.delete(id).subscribe(()=>{
      this.getAllData();
    });
  }
}
