import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpService } from '@core/services/http.service';
import { of, throwError } from 'rxjs';
import { Destination } from '../model/destination';
import { Hotel } from '../model/hotel';
import { Reservation } from '../model/reservation';
import { ReservationSummary } from '../model/reservation-summary';
import { Room } from '../model/room';
import { ReservationService } from './reservation.service';


describe('Reservation Service Tests', () =>
{
  let service: ReservationService;
  let httpClientSpy: {post: jasmine.Spy; get: jasmine.Spy; delete: jasmine.Spy};

  beforeEach(() =>
  {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get', 'delete']);
    const http = new HttpService(httpClientSpy as any);
    service = new ReservationService(http);
  });

  it('It must to create successful', () =>
  {
    expect(service).toBeTruthy();
  });

  it('It must to save a reservation successful', (done: DoneFn) =>
  {
    const room = new Room();

    room.numberGuests = 2;

    const hotel = new Hotel();

    hotel.numberStars = 3;
    hotel.rooms = [room];

    const destination = new Destination();

    destination.city = 'Medellin';
    destination.country = 'Colombia';
    destination.hotel = hotel;

    const reservation = new Reservation();

    reservation.checkIn = '10/07/2022';
    reservation.checkOut = '15/07/2022';
    reservation.destination = destination;

    const mockResultLogin =
    {
      'valor': 1
    };

    httpClientSpy.post.and.returnValue(of(mockResultLogin));

    service.save(reservation).subscribe(() =>
    {
      expect(1).toEqual(mockResultLogin.valor);
      done();
    });
  });

  it('It must to return a 500 internal server error if check in date is wrong', (done: DoneFn) =>
  {
    const room = new Room();

    room.numberGuests = 2;

    const hotel = new Hotel();

    hotel.numberStars = 3;
    hotel.rooms = [room];

    const destination = new Destination();

    destination.city = 'Medellin';
    destination.country = 'Colombia';
    destination.hotel = hotel;

    const reservation = new Reservation();

    reservation.checkIn = '10/07/2021';
    reservation.checkOut = '15/07/2022';
    reservation.destination = destination;

    const mockResultLogin = new HttpErrorResponse({
      error: 'Check in date cannot be lees than current date',
      status: 500
    });

    httpClientSpy.post.and.returnValue(throwError(mockResultLogin));

    service.save(reservation).subscribe(() => {}, error =>
    {
      expect(error.status).toEqual(500);
      done();
    });
  });

  it('It must to return a 500 internal server error if check in out date is wrong', (done: DoneFn) =>
  {
    const room = new Room();

    room.numberGuests = 2;

    const hotel = new Hotel();

    hotel.numberStars = 3;
    hotel.rooms = [room];

    const destination = new Destination();

    destination.city = 'Medellin';
    destination.country = 'Colombia';
    destination.hotel = hotel;

    const reservation = new Reservation();

    reservation.checkIn = '10/07/2022';
    reservation.checkOut = '15/07/2021';
    reservation.destination = destination;

    const mockResultLogin = new HttpErrorResponse({
      error: 'Check out date cannot be lees than or equal check in date',
      status: 500
    });

    httpClientSpy.post.and.returnValue(throwError(mockResultLogin));

    service.save(reservation).subscribe(() => {}, error =>
    {
      expect(error.status).toEqual(500);
      done();
    });
  });

  it('It must to return a 500 internal server error if city is wrong', (done: DoneFn) =>
  {
    const room = new Room();

    room.numberGuests = 2;

    const hotel = new Hotel();

    hotel.numberStars = 3;
    hotel.rooms = [room];

    const destination = new Destination();

    destination.city = 'Taumatawhakatangihangak oauauotamateaturipukaka pikimaungahoronukupokaiwhe nua kitanatahut';
    destination.country = 'Colombia';
    destination.hotel = hotel;

    const reservation = new Reservation();

    reservation.checkIn = '10/07/2022';
    reservation.checkOut = '15/07/2022';
    reservation.destination = destination;

    const mockResultLogin = new HttpErrorResponse({
      error: 'Length of city has to be between 1 and 89 characters',
      status: 500
    });

    httpClientSpy.post.and.returnValue(throwError(mockResultLogin));

    service.save(reservation).subscribe(() => {}, error =>
    {
      expect(error.status).toEqual(500);
      done();
    });
  });

  it('It must to return a 500 internal server error if country is wrong', (done: DoneFn) =>
  {
    const room = new Room();

    room.numberGuests = 2;

    const hotel = new Hotel();

    hotel.numberStars = 3;
    hotel.rooms = [room];

    const destination = new Destination();

    destination.city = 'Medellin';
    destination.country = 'Reino Unido de Gran Bretaña e Irlanda del Norte y la Union Europea';
    destination.hotel = hotel;

    const reservation = new Reservation();

    reservation.checkIn = '10/07/2022';
    reservation.checkOut = '15/07/2022';
    reservation.destination = destination;

    const mockResultLogin = new HttpErrorResponse({
      error: 'Length of country has to be between 1 and 48 characters',
      status: 500
    });

    httpClientSpy.post.and.returnValue(throwError(mockResultLogin));

    service.save(reservation).subscribe(() => {}, error =>
    {
      expect(error.status).toEqual(500);
      done();
    });
  });

  it('It must to return a 500 internal server error if number of stars is wrong', (done: DoneFn) =>
  {
    const room = new Room();

    room.numberGuests = 2;

    const hotel = new Hotel();

    hotel.numberStars = 6;
    hotel.rooms = [room];

    const destination = new Destination();

    destination.city = 'Medellin';
    destination.country = 'Colombia';
    destination.hotel = hotel;

    const reservation = new Reservation();

    reservation.checkIn = '10/07/2022';
    reservation.checkOut = '15/07/2022';
    reservation.destination = destination;

    const mockResultLogin = new HttpErrorResponse({
      error: 'Number of stars cannot be less than one or greater than five.',
      status: 500
    });

    httpClientSpy.post.and.returnValue(throwError(mockResultLogin));

    service.save(reservation).subscribe(() => {}, error =>
    {
      expect(error.status).toEqual(500);
      done();
    });
  });

  it('It must to return a 500 internal server error if number of guests is wrong', (done: DoneFn) =>
  {
    const room = new Room();

    room.numberGuests = 9;

    const hotel = new Hotel();

    hotel.numberStars = 4;
    hotel.rooms = [room];

    const destination = new Destination();

    destination.city = 'Medellin';
    destination.country = 'Colombia';
    destination.hotel = hotel;

    const reservation = new Reservation();

    reservation.checkIn = '10/07/2022';
    reservation.checkOut = '15/07/2022';
    reservation.destination = destination;

    const mockResultLogin = new HttpErrorResponse({
      error: 'Number of guests cannot be greater than 8',
      status: 500
    });

    httpClientSpy.post.and.returnValue(throwError(mockResultLogin));

    service.save(reservation).subscribe(() => {}, error =>
    {
      expect(error.status).toEqual(500);
      done();
    });
  });

  it('It must to get a reservation by ID successful', (done: DoneFn) =>
  {
    const room = new Room();

    room.numberGuests = 3;

    const hotel = new Hotel();

    hotel.numberStars = 3;
    hotel.rooms = [room];

    const destination = new Destination();

    destination.city = 'Medellin';
    destination.country = 'Colombia';
    destination.hotel = hotel;

    const reservation = new ReservationSummary();

    reservation.id = 1;
    reservation.checkIn = '10/07/2022';
    reservation.checkOut = '15/07/2022';
    reservation.price = 2535.0;
    reservation.destination = destination;

    const mockResultGet = reservation;

    httpClientSpy.get.and.returnValue(of(mockResultGet));

    service.getById(1).subscribe(() =>
    {
      expect(reservation).toEqual(mockResultGet);
      done();
    });
  });

  it('It must to return a 500 internal server error if does not existis a reservation with ID', () =>
  {
    const mockResultGet = new HttpErrorResponse({
      error: 'There is no reservation on id 1',
      status: 500
    });

    httpClientSpy.get.and.returnValue(of(mockResultGet));

    service.getById(1).subscribe(() => {}, error =>
    {
      expect(error.status).toEqual(500);
    });
  });

  it('It must to get all reservations successful', (done: DoneFn) =>
  {
    const room = new Room();

    room.numberGuests = 3;

    const hotel = new Hotel();

    hotel.numberStars = 3;
    hotel.rooms = [room];

    const destination = new Destination();

    destination.city = 'Medellin';
    destination.country = 'Colombia';
    destination.hotel = hotel;

    const reservation = new ReservationSummary();

    reservation.id = 1;
    reservation.checkIn = '10/07/2022';
    reservation.checkOut = '15/07/2022';
    reservation.price = 2535.0;
    reservation.destination = destination;

    const reservations = [reservation];

    const mockResultGet = reservations;

    httpClientSpy.get.and.returnValue(of(mockResultGet));

    service.getAll().subscribe(() =>
    {
      expect(reservations).toEqual(mockResultGet);
      done();
    });
  });

  it('It must to return a 500 internal server error if does not existis any reservation', () =>
  {
    const mockResultGet = new HttpErrorResponse({
      error: 'There is no reservations on app ',
      status: 500
    });

    httpClientSpy.get.and.returnValue(of(mockResultGet));

    service.getAll().subscribe(() => {}, error =>
    {
      expect(error.status).toEqual(500);
    });
  });

  it('It must to delete a reservation with a ID successful', () =>
  {
    const mockResultGet = new HttpResponse
    ({
      status: 200
    });

    httpClientSpy.delete.and.returnValue(of(mockResultGet));

    service.delete(1).subscribe(() =>{}, () =>
    {
      expect(200).toEqual(mockResultGet.status);
    });
  });

  it('It must to return a 500 internal server error if does not existis a reservation with ID', () =>
  {
    const mockResultGet = new HttpErrorResponse({
      error: 'There is no reservation on id 1',
      status: 500
    });

    httpClientSpy.delete.and.returnValue(of(mockResultGet));

    service.delete(1).subscribe(() => {}, error =>
    {
      expect(error.status).toEqual(500);
    });
  });
});
