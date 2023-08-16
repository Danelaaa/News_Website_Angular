import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologypageComponent } from './technologypage.component';

describe('TechnologypageComponent', () => {
  let component: TechnologypageComponent;
  let fixture: ComponentFixture<TechnologypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologypageComponent]
    });
    fixture = TestBed.createComponent(TechnologypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
