import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLastNewsComponent } from './main-last-news.component';

describe('MainLastNewsComponent', () => {
  let component: MainLastNewsComponent;
  let fixture: ComponentFixture<MainLastNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLastNewsComponent]
    });
    fixture = TestBed.createComponent(MainLastNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
