import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { MainPageTopAdvComponent } from './advertisment/main-page-top-adv/main-page-top-adv.component';
import { MainLastNewsComponent } from './main/main-last-news/main-last-news.component';
import { MainSectionComponent } from './main/main-section/main-section.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NewsComponent } from './news/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NewsSectionComponent } from './news/news-section/news-section.component';
import { LastNewsComponent } from './main/last-news/last-news.component';
import { HomeComponent } from './home/home.component';
import { TechnologypageComponent } from './technologyPage/technologypage/technologypage.component';
import { TechnologypagemainComponent } from './technologyPage/technologypagemain/technologypagemain.component';
import { SportpageComponent } from './sportPage/sportpage/sportpage.component';
import { SportpagemainComponent } from './sportPage/sportpagemain/sportpagemain.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full',
  },
  { path: 'home', 
    component: HomeComponent, 
  },
  { path: 'news', 
    component: NewsComponent 
  },
  { path: 'technology', 
    component: TechnologypageComponent 
  },
  { path: 'sport', 
    component: SportpageComponent 
  },
  { path: 'science', 
    component: SportpageComponent 
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    MainPageTopAdvComponent,
    MainLastNewsComponent,
    MainSectionComponent,
    FooterComponent,
    NewsComponent,
    NewsSectionComponent,
    LastNewsComponent,
    HomeComponent,
    TechnologypageComponent,
    TechnologypagemainComponent,
    SportpageComponent,
    SportpagemainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
