import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTopAdvComponent } from './main-page-top-adv.component';

describe('MainPageTopAdvComponent', () => {
  let component: MainPageTopAdvComponent;
  let fixture: ComponentFixture<MainPageTopAdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageTopAdvComponent]
    });
    fixture = TestBed.createComponent(MainPageTopAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
