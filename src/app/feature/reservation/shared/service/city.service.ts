import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService
{
  constructor(private http: HttpClient)
  {

  }

  public getCities()
  {
    return this.http.get('assets/cities.json');
  }
}
