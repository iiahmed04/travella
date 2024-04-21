import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDetailesComponent } from './trip-detailes.component';

describe('TripDetailesComponent', () => {
  let component: TripDetailesComponent;
  let fixture: ComponentFixture<TripDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripDetailesComponent]
    });
    fixture = TestBed.createComponent(TripDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
