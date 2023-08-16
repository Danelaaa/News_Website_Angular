import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportpageComponent } from './sportpage.component';

describe('SportpageComponent', () => {
  let component: SportpageComponent;
  let fixture: ComponentFixture<SportpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportpageComponent]
    });
    fixture = TestBed.createComponent(SportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
