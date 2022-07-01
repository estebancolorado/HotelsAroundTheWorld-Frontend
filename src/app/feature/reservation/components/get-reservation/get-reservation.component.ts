import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationSummary } from '../../shared/model/reservation-summary';
import { ReservationService } from '../../shared/service/reservation.service';

@Component({
  selector: 'app-get-reservation',
  templateUrl: './get-reservation.component.html',
  styleUrls: ['./get-reservation.component.css']
})
export class GetReservationComponent implements OnInit
{
  public reservations: Observable<ReservationSummary[]>;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void
  {
    this.reservations = this.getAll();
  }

  public getAll()
  {
    return this.reservationService.getAll();
  }
}
