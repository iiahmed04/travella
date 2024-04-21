import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactApiService } from 'src/app/controllers/contact-api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts!:any[];
  constructor(private api:ContactApiService,private router:Router){
    this.getAllData();
    let logedIn=JSON.parse(localStorage.getItem('logedIn')||'false');
    if(!logedIn){
      this.router.navigateByUrl('/error')
    }
  }
  getAllData(){
    this.api.get().subscribe((data:any)=>{
      this.contacts=data;
    })
  }
  remove(id:any){
    this.api.delete(id).subscribe(()=>{
      this.getAllData();
    });
  }
}
