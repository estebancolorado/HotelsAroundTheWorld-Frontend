import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { City } from '../../shared/model/city';
import { Reservation } from '../../shared/model/reservation';
import { ReservationService } from '../../shared/service/reservation.service';
import { CityService } from '../../shared/service/city.service';
import { Notifications } from '@shared/directivas/notifications';

@Component({
  selector: 'app-save-reservation',
  templateUrl: './save-reservation.component.html',
  styleUrls: ['./save-reservation.component.css']
})
export class SaveReservationComponent implements OnInit
{
  formReservation: FormGroup;
  reservation = new Reservation();

  numberRooms: number;
  numberGuests: number;
  cities: City[] = [];

  constructor(private datePipe: DatePipe, private reservationService: ReservationService, private cityService: CityService, private notifications: Notifications) { }

  ngOnInit(): void
  {
    this.cityService.getCities().subscribe((response: City[]) =>
    {
      this.cities = response;
    });

    this.buildFormReservation();
  }

  save(): void
  {
    this.buildReservation();

    if(this.formReservation.valid)
    {
      this.reservationService.save(this.reservation).subscribe(() =>
      {
        this.formReservation.reset();
        this.notifications.getNotification('La reservación se ha realizado de forma exitosa', 'success');
      }, (error) =>
      {
        this.notifications.getNotification(error.error.mensaje, 'error');
      });
    }
    else
    {
      this.notifications.getNotification('Faltan campos por diligenciar', 'error');
    }
  }

  private buildReservation()
  {
    const destinationInput = this.formReservation.get('destination')?.value;

    for(const item of this.cities)
    {
      if(destinationInput === item.name)
      {
        this.reservation.destination.city = item.name as string;
        this.reservation.destination.country = item.country as string;
      }
    }

    const checkInInput = this.formReservation.get('checkIn')?.value;
    const checkOutInput = this.formReservation.get('checkOut')?.value;

    const checkInDate = this.datePipe.transform(checkInInput as Date, 'dd/MM/yyyy');
    const checkOutDate = this.datePipe.transform(checkOutInput as Date, 'dd/MM/yyyy');

    this.reservation.checkIn = checkInDate as string;
    this.reservation.checkOut = checkOutDate as string;


    const numberStarsInput = this.formReservation.get('numberStars')?.value;

    this.reservation.destination.hotel.numberStars = numberStarsInput as number;

    const numberRoomsInput = this.formReservation.get('numberRooms')?.value;

    const numberGuestsInput = this.formReservation.get('numberGuests')?.value;

    const rooms = [];

    for(let index = 0; index < (numberRoomsInput as number); index++)
    {
      rooms.push(numberGuestsInput as number);
    }

    this.reservation.destination.hotel.rooms = rooms;
  }

  private buildFormReservation()
  {
    this.formReservation = new FormGroup
    ({
      destination: new FormControl('', [Validators.required]),
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required]),
      numberStars: new FormControl('', [Validators.required]),
      numberRooms: new FormControl('', [Validators.required]),
      numberGuests: new FormControl('', [Validators.required]),
    });
  }
}
