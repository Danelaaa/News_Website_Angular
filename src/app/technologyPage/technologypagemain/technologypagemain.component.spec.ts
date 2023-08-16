import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologypagemainComponent } from './technologypagemain.component';

describe('TechnologypagemainComponent', () => {
  let component: TechnologypagemainComponent;
  let fixture: ComponentFixture<TechnologypagemainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologypagemainComponent]
    });
    fixture = TestBed.createComponent(TechnologypagemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
