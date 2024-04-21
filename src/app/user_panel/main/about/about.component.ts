import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  url!:any;
  title!:any;
  constructor(){}

  ngOnInit(){
    let one=document.querySelector('.oneToFive .one');
    let two=document.querySelector('.oneToFive .two');
    let three=document.querySelector('.oneToFive .three');
    let four=document.querySelector('.oneToFive .four');
    let five=document.querySelector('.oneToFive .five');
    window.addEventListener("scroll",()=>{
    let nowscroll=window.scrollY;
    console.log(nowscroll);
  if(nowscroll>666 ){
    one?.classList.add('goLeft');
  }
  if(nowscroll>1004){
    two?.classList.add('goRight');
  }
  if(nowscroll>1348){
    three?.classList.add('goLeft');
  }
  if(nowscroll>1648){
    four?.classList.add('goRight');
  }
  if(nowscroll>2026){
    five?.classList.add('goLeft');
  }

})
  }


}
