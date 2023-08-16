import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportpagemainComponent } from './sportpagemain.component';

describe('SportpagemainComponent', () => {
  let component: SportpagemainComponent;
  let fixture: ComponentFixture<SportpagemainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportpagemainComponent]
    });
    fixture = TestBed.createComponent(SportpagemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
