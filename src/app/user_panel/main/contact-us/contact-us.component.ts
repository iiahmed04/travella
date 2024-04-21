import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactApiService } from 'src/app/controllers/contact-api.service';
import { Contact } from 'src/app/modules/contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  url!:any;
  title!:any;
  success:string='';
  contact=new Contact();
  constructor(public api:ContactApiService,private router:Router){
  }
  submit(){
    this.api.post(this.contact).subscribe((data:any)=>{
      this.success='Your problem has been added successfully';
    })
  }
}
