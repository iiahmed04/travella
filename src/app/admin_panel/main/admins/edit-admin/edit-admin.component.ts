import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminsApiService } from 'src/app/controllers/admins-api.service';
import { Admins } from 'src/app/modules/admins';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {
  admin = new Admins();
  id!:any;
  constructor(private activatedRoute:ActivatedRoute,private api:AdminsApiService,private router:Router){
    this.id=this.activatedRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data:any)=>{
      this.admin=data;
    })
    let logedIn=JSON.parse(localStorage.getItem('logedIn')||'false');
    if(!logedIn){
      this.router.navigateByUrl('/error')
    }
  }
  update(){
    this.api.put(this.id,this.admin).subscribe((data:any)=>{
      this.router.navigateByUrl('/admin/admins/list');
    })
  }
}
