import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CityService } from './city.service';

describe('Reservation Service Tests', () =>
{
  let service: CityService;
  let httpClientSpy: {get: jasmine.Spy};

  beforeEach(() =>
  {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    const http = new HttpClient(httpClientSpy as any);
    service = new CityService(http);
  });

  it('It must to create successful', () =>
  {
    expect(service).toBeTruthy();
  });

  it('It must to get all cities successful', () =>
  {
    const mockResultLogin =
    [
      {
        'name': 'Cartagena',
        'country': 'Colombia'
      },
      {
        'name': 'París',
        'country': 'Francia'
      },
      {
        'name': 'Londres',
        'country': 'Inglaterra'
      },
      {
        'name': 'Atenas',
        'country': 'Grecia'
      },
      {
        'name': 'Roma',
        'country': 'Italia'
      },
      {
        'name': 'Varsovia',
        'country': 'Polonia'
      },
      {
        'name': 'Budapest',
        'country': 'Hungría'
      },
      {
        'name': 'Dubái',
        'country': 'Emiratos Árabes Unido'
      },
      {
        'name': 'Lyon',
        'country': 'Francia'
      },
      {
        'name': 'Berlín',
        'country': 'Alemania'
      },
      {
        'name': 'Ámsterdam',
        'country': 'Paises Bajos'
      },
      {
        'name': 'Nueva York',
        'country': 'Estados Unidos de America'
      },
      {
        'name': 'Florencia',
        'country': 'Italia'
      },
      {
        'name': 'Tokyo',
        'country': 'Japón'
      },
      {
        'name': 'Bogota',
        'country': 'Colombia'
      },
      {
        'name': 'Cancún',
        'country': 'Mexico'
      }
    ];

    httpClientSpy.get.and.returnValue(of(mockResultLogin));

    service.getCities().subscribe((cities) =>
    {
      expect(cities).toEqual(mockResultLogin);
    });
  });
});
