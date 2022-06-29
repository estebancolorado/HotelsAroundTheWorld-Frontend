import { element, by } from 'protractor';

export class ReservationPage
{
  private getAll = element(by.id('getReservations'));
  private save = element(by.id('saveReservation'));

  

  async clickGetAll()
  {
    await this.getAll.click();
  }

  async clickSave()
  {
    await this.save.click();
  }
}
