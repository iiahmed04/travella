import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsApiService } from 'src/app/controllers/admins-api.service';
import { Admins } from 'src/app/modules/admins';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  admin=new Admins();
  constructor(public api:AdminsApiService,private router:Router){
    let logedIn=JSON.parse(localStorage.getItem('logedIn')||'false');
    if(!logedIn){
      this.router.navigateByUrl('/error')
    }
  }
  submit(){
    this.api.post(this.admin).subscribe((data:any)=>{
      this.router.navigateByUrl('/admin/admins/list')
    })
  }
}
