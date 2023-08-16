import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-last-news',
  templateUrl: './main-last-news.component.html',
  styleUrls: ['./main-last-news.component.css']
})
export class MainLastNewsComponent implements OnInit{

  MainLastNews = [
    {
      title: 'MainLastNews',
      img:'../../../assets/download.jpg',
      link: '/news',
    },
   
    
  ];
  MainLastNewsRight = [
    {
      title: 'MainLastNews',
      img:'../../../assets/download.jpg',
      link: '/news',

    },
    {
      title: 'MainLastNews',
      img:'../../../assets/download.jpg',
      link: '/news',

    },
   
    
  ];





  constructor(){}
  ngOnInit(): void {
    
  }


}
