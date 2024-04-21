import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsApiService } from 'src/app/controllers/admins-api.service';
import { Admins } from 'src/app/modules/admins';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin=new Admins();
  message='';
  constructor(private api:AdminsApiService,private router:Router){
  }
  submit(){
    this.api.get().subscribe((data:any)=>{
      let user=data.find((user:any)=>{
        return (user.email === this.admin.email && user.password === this.admin.password)
      })
      if(user){
        localStorage.setItem('logedIn','true');
        localStorage.setItem("userId",user.id)
        this.router.navigateByUrl('/admin/dashboard')
      }
      else{
        this.message="Invalid Email or Password";
      }
    })
  }
}
