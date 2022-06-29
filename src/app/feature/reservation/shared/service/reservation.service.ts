import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Reservation } from '../model/reservation';
import { ReservationSummary } from '../model/reservation-summary';

@Injectable()
export class ReservationService
{
  constructor(private httpService: HttpService) { }

  public getAll(): Observable<ReservationSummary[]>
  {
    return this.httpService.doGet<ReservationSummary[]>(`${environment.endpoint}/reservations`);
  }

  public getById(id: number): Observable<ReservationSummary>
  {
    return this.httpService.doGetById<ReservationSummary>(`${environment.endpoint}/reservations/`, id);
  }

  public save(reservation: Reservation): Observable<number>
  {
    return this.httpService.doPost<Reservation, number>(`${environment.endpoint}/reservations`, reservation);
  }

  public delete(id: number): Observable<void> {
    return this.httpService.doDelete(`${environment.endpoint}/reservations/${id}`);
  }
}
