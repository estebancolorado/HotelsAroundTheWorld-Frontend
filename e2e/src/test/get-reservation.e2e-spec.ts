import { NavbarPage } from '../page/navbar/navbar.po';
import { GetReservationsPage } from '../page/reservation/get-reservation-po';
import { ReservationPage } from '../page/reservation/reservation.po';

describe('workspace-project alquiler', () =>
{
  let navBar: NavbarPage;
  let getReservationsPage: GetReservationsPage;
  let reservationPage: ReservationPage;

  beforeEach(() =>
  {
    navBar = new NavbarPage();
    reservationPage = new ReservationPage();
    getReservationsPage = new GetReservationsPage();
    navBar.clickReservationButton();
  });

  it('Should be get all the reservations', () =>
  {
    reservationPage.clickGetAll();
    expect(getReservationsPage.calculateNumberReservations()).toBeGreaterThanOrEqual(0);
  });
});
