import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsApiService } from 'src/app/controllers/admins-api.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {
  admins!:any[];
  constructor(private api:AdminsApiService,private router:Router){
    this.getAllData();
    let logedIn=JSON.parse(localStorage.getItem('logedIn')||'false');
    if(!logedIn){
      this.router.navigateByUrl('/error')
    }
  }
  getAllData(){
    this.api.get().subscribe((data:any)=>{
      this.admins=data;
    })
  }
  remove(id:any){
    this.api.delete(id).subscribe(()=>{
      this.getAllData();
    });
  }
}
