import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){

  }
  remove(){
    localStorage.removeItem('logedIn');
    localStorage.removeItem('userId');
    this.router.navigateByUrl('/home')
  }
}
