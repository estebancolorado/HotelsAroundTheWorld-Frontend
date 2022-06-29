import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReservationComponent } from './get-reservation.component';

describe('GetReservationComponent', () => {
  let component: GetReservationComponent;
  let fixture: ComponentFixture<GetReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
