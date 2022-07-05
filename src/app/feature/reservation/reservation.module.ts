import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { DeleteReservationComponent } from './components/delete-reservation/delete-reservation.component';
import { GetReservationComponent } from './components/get-reservation/get-reservation.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SaveReservationComponent } from './components/save-reservation/save-reservation.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationService } from './shared/service/reservation.service';
import { HttpClientModule } from '@angular/common/http';
import { CityService } from './shared/service/city.service';
import { Notifications } from '@shared/directivas/notifications';

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
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ReservationService, CityService, Notifications, DatePipe]
})
export class ReservationModule { }
