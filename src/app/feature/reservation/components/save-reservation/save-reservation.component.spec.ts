import { CommonModule, DatePipe } from '@angular/common';
import { ComponentFixture, waitForAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { ReservationService } from '../../shared/service/reservation.service';
import { SaveReservationComponent } from './save-reservation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Notifications } from '@shared/directivas/notifications';

describe('SaveReservationComponent', () =>
{
  let component: SaveReservationComponent;
  let reservationService: ReservationService;
  let fixture: ComponentFixture<SaveReservationComponent>;

  beforeEach(waitForAsync(() =>
  {
    TestBed.configureTestingModule({
      declarations: [SaveReservationComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ReservationService, DatePipe, HttpService, Notifications],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveReservationComponent);
    component = fixture.componentInstance;
    reservationService = TestBed.inject(ReservationService);
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('Form is invalid because fields are empty', () =>
  {
    component.formReservation.controls.destination.setValue('');
    component.formReservation.controls.checkIn.setValue('');
    component.formReservation.controls.checkOut.setValue('');
    component.formReservation.controls.numberStars.setValue('');
    component.formReservation.controls.numberRooms.setValue('');
    component.formReservation.controls.numberGuests.setValue('');

    expect(component.formReservation.valid).toBeFalsy();

    component.save();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Faltan campos por diligenciar');
    Swal.clickConfirm();
  });

  it('Should be reserve successful', () =>
  {
    TestBed.resetTestingModule();
    component.formReservation.controls.destination.setValue('Bogota');
    component.formReservation.controls.checkIn.setValue('07/07/2022');
    component.formReservation.controls.checkOut.setValue('07/07/2022');
    component.formReservation.controls.numberStars.setValue(3);
    component.formReservation.controls.numberRooms.setValue(2);
    component.formReservation.controls.numberGuests.setValue(3);

    spyOn(reservationService, 'save').and.returnValue(of(1));

    component.save();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('La reservación se ha realizado de forma exitosa');
    Swal.clickConfirm();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
