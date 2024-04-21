import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BookingApiService } from 'src/app/controllers/booking-api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books!:any[];
  constructor(private api:BookingApiService,private router:Router){
    this.getAllData();
    let logedIn=JSON.parse(localStorage.getItem('logedIn')||'false');
    if(!logedIn){
      this.router.navigateByUrl('/error')
    }
  }
  getAllData(){
    this.api.get().subscribe((data:any)=>{
      this.books=data;
    })
  }
  remove(id:any){
    this.api.delete(id).subscribe(()=>{
      this.getAllData();
    });
  }
}
