import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripsComponent } from './add-trips.component';

describe('AddTripsComponent', () => {
  let component: AddTripsComponent;
  let fixture: ComponentFixture<AddTripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTripsComponent]
    });
    fixture = TestBed.createComponent(AddTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
