import { browser } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { ReservationPage } from '../page/reservation/reservation.po';
import { SaveReservationPage } from '../page/reservation/save-reservation.po';

describe('workspace-project alquiler', () =>
{
  let navBar: NavbarPage;
  let saveReservationPage: SaveReservationPage;
  let reservationPage: ReservationPage;

  beforeEach(() =>
  {
    navBar = new NavbarPage();
    reservationPage= new ReservationPage();
    saveReservationPage = new SaveReservationPage();
    navBar.clickReservationButton();
    reservationPage.clickSave();
  });

  it('Should be save a reservation', () =>
  {

    const checkIn = '10/07/2022';
    const checkOut = '15/07/2022';
    const city = 'Cartagena';
    const numberStars =  3;
    const numberRooms =  1;
    const numberGuests =  3;

    saveReservationPage.enterDestination(city);
    saveReservationPage.enterCheckIn(checkIn);
    saveReservationPage.enterCheckOut(checkOut);
    saveReservationPage.enterNumberStars(numberStars);
    saveReservationPage.enterNumberRooms(numberRooms);
    saveReservationPage.enterNumberGuests(numberGuests);

    browser.driver.manage().window().maximize();

    saveReservationPage.reserve();

    expect(saveReservationPage.getSwalFireTitle()).toEqual('La reservación se ha realizado de forma exitosa');
  });

  it('No debería crear si tiene campos sin llenar', () =>
  {
    saveReservationPage.reserve();
    expect(saveReservationPage.getSwalFireTitle()).toEqual('Faltan campos por diligenciar');
  });

});
