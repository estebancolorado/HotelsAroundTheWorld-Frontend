import { CommonModule, DatePipe } from '@angular/common';
import { ComponentFixture, waitForAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { ReservationService } from '../../shared/service/reservation.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetReservationComponent } from './get-reservation.component';
import { Observable } from 'rxjs';
import { ReservationSummary } from '../../shared/model/reservation-summary';
import { Destination } from '../../shared/model/destination';
import { Hotel } from '../../shared/model/hotel';
import { Room } from '../../shared/model/room';

describe('GetReservationComponent', () =>
{
  let component: GetReservationComponent;
  let fixture: ComponentFixture<GetReservationComponent>;
  let reservationService: ReservationService;
  let reservations: ReservationSummary[];
  let reservation: ReservationSummary;
  let destination: Destination;
  let hotel: Hotel;
  let room: Room;
  let rooms: Room[];
  let response: Observable<ReservationSummary[]>;
  let data1: ReservationSummary[];
  let data2: ReservationSummary[];

  beforeEach(waitForAsync(() =>
  {
    TestBed.configureTestingModule({
      declarations: [GetReservationComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ReservationService, DatePipe, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(GetReservationComponent);
    component = fixture.componentInstance;
    reservationService = TestBed.inject(ReservationService);
    fixture.detectChanges();
    room = new Room();
    room.numberGuests = 3;
    rooms = [room];
    hotel = new Hotel();
    hotel.numberStars = 3;
    hotel.rooms = rooms;
    destination = new Destination();
    destination.city = 'Bogota';
    destination.country = 'Colombia';
    destination.hotel = hotel;
    reservation = new ReservationSummary();
    reservation.id = 1;
    reservation.checkIn = '10/07/2022';
    reservation.checkOut = '15/07/2022';
    reservation.price = 2535.00;
    reservations = [reservation];
    response = new Observable<ReservationSummary[]>();
    data1 = [];
    response.subscribe((data) =>
    {
      data = reservations;
      data1 = data;
    });
    data2 = [];
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('Should be list reservations successful', () =>
  {
    TestBed.resetTestingModule();

    spyOn(reservationService, 'getAll').and.returnValue(response);

    const newResponse = component.getAll();

    newResponse.subscribe((data) =>
    {
      data2 = data;
    });

    expect(data2).toEqual(data1);
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
