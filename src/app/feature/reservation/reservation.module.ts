import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { DeleteReservationComponent } from './components/delete-reservation/delete-reservation.component';
import { GetReservationComponent } from './components/get-reservation/get-reservation.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SaveReservationComponent } from './components/save-reservation/save-reservation.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationService } from './shared/service/reservation.service';

@NgModule({
  declarations: [
    GetReservationComponent,
    SaveReservationComponent,
    DeleteReservationComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ReservationService, DatePipe]
})
export class ReservationModule { }
