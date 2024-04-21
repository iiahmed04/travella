import { Component } from '@angular/core';
import { TripsApiService } from 'src/app/controllers/trips-api.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  trips!:any[];
  constructor(private api:TripsApiService){
    this.getAllData();
  }
  getAllData(){
    this.api.get().subscribe((data:any)=>{
      this.trips=data;
    })
  }

  ngOnInit(){
    let activities=document.querySelector('.activities')
    let comments=document.querySelector(".comments")
    let h1=document.querySelector(".anim")
    window.addEventListener("scroll",()=>{
      let nowscroll=window.scrollY;
      console.log(nowscroll);
      if(nowscroll>536){
        h1?.classList.add('goRight')
      }
      if(nowscroll>648){
        activities?.classList.add('goRight')
        comments?.classList.add('goLeft')
      }
  })
}
}
