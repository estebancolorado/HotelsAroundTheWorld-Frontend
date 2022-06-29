import { by, element } from 'protractor';

export class SaveReservationPage
{
  private destination = element(by.id('destination'));
  private checkIn = element(by.id('checkIn'));
  private checkOut = element(by.id('checkOut'));
  private numberStars = element(by.id('numberStars'));
  private rooms = element(by.id('numberRooms'));
  private numberGuests = element(by.id('numberGuests'));
  private buttonReserve = element(by.id('reserve'));
  private swalFireTitle = element(by.className('swal2-title'));

  async enterDestination(destination: string)
  {
    await this.destination.sendKeys(destination);
  }

  async enterCheckIn(checkIn: string)
  {
    await this.checkIn.sendKeys(checkIn);
  }

  async enterCheckOut(checkOut: string)
  {
    await this.checkOut.sendKeys(checkOut);
  }

  async enterNumberStars(numberStars: number)
  {
    await this.numberStars.sendKeys(numberStars);
  }

  async enterNumberRooms(numberRooms: number)
  {
    await this.rooms.sendKeys(numberRooms);
  }

  async enterNumberGuests(numberGuests: number)
  {
    await this.numberGuests.sendKeys(numberGuests);
  }

  async reserve()
  {
    await this.buttonReserve.click();
  }

  async getSwalFireTitle(): Promise<string>
  {
    return await this.swalFireTitle.getText();
  }
}
