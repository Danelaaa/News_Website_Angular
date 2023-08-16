import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  headerTitle = [
    {
      title:'მთავარი',
      link:'/home',
    },
    {
      title:'ახალი ამბები',
      link:'#main',
    },
    {
      title:'სპორტი',
      link:'sport',
    },
    {
      title:'მეცნიერება',
      link:'#main',
    },
    {
      title:'ტექნოლოგიები',
      link:'/technology',
    },
    {
      title:'ქვიზები',
      link:'#main',
    },
    
  ];
  topHeader = [
    {
      title:'რეკლამა',
      link:'#main',
    },
    {
      title:'კონტაქტი',
      link:'#main',
    },
  ];
  
  
  constructor(){}
  ngOnInit(): void {
    
  }
}
