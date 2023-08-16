import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})
export class LastNewsComponent implements OnInit{
  LastNews = [
    {
      time: 8,
      title: 'ერდოღანი მოელის, რომ პუტინი თურქეთს აგვისტოში ეწვევა',
      img:'../../../assets/putin-and-erdogan.jpg',
      link: '/news',
    },
    {
      time: 8,
      title: 'ერდოღანი მოელის, რომ პუტინი თურქეთს აგვისტოში ეწვევა',
      img:'../../../assets/putin-and-erdogan.jpg',
      link: '/news',
    },
    {
      time: 8,
      title: 'ერდოღანი მოელის, რომ პუტინი თურქეთს აგვისტოში ეწვევა',
      img:'../../../assets/putin-and-erdogan.jpg',
      link: '/news',
    },
    {
      time: 8,
      title: 'ერდოღანი მოელის, რომ პუტინი თურქეთს აგვისტოში ეწვევა',
      img:'../../../assets/putin-and-erdogan.jpg',
      link: '/news',
    },

    
   
  ];


  
  constructor(){}
  ngOnInit(): void {
    
  }
}
