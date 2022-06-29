import { Component, OnInit } from '@angular/core';
import { ReservationSummary } from '../../shared/model/reservation-summary';
import { ReservationService } from '../../shared/service/reservation.service';

@Component({
  selector: 'app-get-reservation',
  templateUrl: './get-reservation.component.html',
  styleUrls: ['./get-reservation.component.css']
})
export class GetReservationComponent implements OnInit
{
  reservations: ReservationSummary[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void
  {
    this.getAll();
  }

  private getAll()
  {
    this.reservationService.getAll().subscribe((res) =>
    {
      this.reservations = res;
    });
  }
}
