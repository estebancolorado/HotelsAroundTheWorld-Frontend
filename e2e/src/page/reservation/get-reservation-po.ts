import { by, element } from 'protractor';

export class GetReservationsPage
{
  private listReservations = element.all(by.id('listReservations'));

  async calculateNumberReservations(): Promise<number>
  {
    return await this.listReservations.count();
  }
}
