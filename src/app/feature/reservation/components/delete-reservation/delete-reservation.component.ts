import { Component, Input } from '@angular/core';
import { ReservationService } from '../../shared/service/reservation.service';

@Component({
  selector: 'app-delete-reservation',
  templateUrl: './delete-reservation.component.html',
  styleUrls: ['./delete-reservation.component.css']
})
export class DeleteReservationComponent
{
  @Input() id: number;

  constructor(private reservationService: ReservationService) { }

  onDelete(): void
  {
    this.reservationService.delete(this.id).subscribe(() =>
    {
      location.reload();
    });
  }
}
