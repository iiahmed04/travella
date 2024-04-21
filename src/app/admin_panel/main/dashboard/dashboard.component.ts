import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsApiService } from 'src/app/controllers/admins-api.service';
import { Admins } from 'src/app/modules/admins';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  admin=new Admins();
  constructor(private router:Router,private api:AdminsApiService){
    let logedIn=JSON.parse(localStorage.getItem('logedIn')||'false');
    let userId=localStorage.getItem('userId')
    this.api.getById(userId).subscribe((data:any)=>{
      this.admin=data
    })
    if(!logedIn){
      this.router.navigateByUrl('/error')
    }
  }
}
