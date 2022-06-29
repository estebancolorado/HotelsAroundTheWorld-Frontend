import { NavbarPage } from '../page/navbar/navbar.po';
import { browser } from 'protractor';
import { ReservationPage } from '../page/reservation/reservation.po';

describe('workspace-reservation',()=>
{
  let reservation: ReservationPage;
  let navbar: NavbarPage;

  beforeEach(()=>
  {
    reservation = new ReservationPage();
    navbar= new NavbarPage();
    navbar.clickReservationButton();
  });

  it('Should redirect to create',()=>
  {
    reservation.clickSave();
    expect(browser.getCurrentUrl()).toContain('reservation/save');
  });

  it('Should redirect to list',()=>
  {
    reservation.clickGetAll();
    expect(browser.getCurrentUrl()).toContain('reservation/getAll');
  });
});
