import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-top-adv',
  templateUrl: './main-page-top-adv.component.html',
  styleUrls: ['./main-page-top-adv.component.css']
})
export class MainPageTopAdvComponent  implements OnInit{


  MainTopAdvertsment = [
    {
      title: 'Main_Page_Top_Adv',
      img:'../../../assets/TopADV.png',
      link: 'https://www.facebook.com/',
    },
   
    
  ];




  constructor(){}
  ngOnInit(): void {
    
  }
}
