import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title!:any;
  show!:any;
  constructor(private activatedRoute:ActivatedRoute){
  }
  ngOnInit(){
    this.title=this.activatedRoute.snapshot.url[0].path;
    if(this.title=='about'){
      this.show='About'
    }
    else if(this.title=='trips'){
      this.show='Trips'
    }
    else if(this.title=='contactUs'){
      this.show='Contact us'
    }
    else if(this.title=='booking'){
      this.show='Booking'
    }
  }
}
