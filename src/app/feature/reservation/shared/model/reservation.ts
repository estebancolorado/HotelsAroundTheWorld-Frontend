import { Destination } from './destination';

export class Reservation
{
  checkIn: string;
  checkOut: string;
  destination: Destination = new Destination();
}
