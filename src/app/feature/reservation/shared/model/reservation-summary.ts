import { Destination } from './destination';

export class ReservationSummary
{
  id: number;
  checkIn: string;
  checkOut: string;
  price: number;
  destination: Destination = new Destination();
}
