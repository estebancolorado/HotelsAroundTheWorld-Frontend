import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetReservationComponent } from './components/get-reservation/get-reservation.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SaveReservationComponent } from './components/save-reservation/save-reservation.component';

const routes: Routes = [{
  path: '',
  component: ReservationComponent,
  children: [
    {
      path: 'save',
      component: SaveReservationComponent
    },
    {
      path: 'getAll',
      component: GetReservationComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
