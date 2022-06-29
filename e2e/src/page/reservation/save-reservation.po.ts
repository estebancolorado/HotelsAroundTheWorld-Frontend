import { by, element } from 'protractor';

export class CrearAlquilerPage
{
  private destination = element(by.name('destination'));
  private checkIn = element(by.name('checkIn'));
  private checkOut = element(by.name('checkOut'));
  private numberStars = element(by.name('numberStars'));
  private rooms = element(by.name('numberRooms'));
  private numberGuests = element(by.name('numberGuests'));
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
