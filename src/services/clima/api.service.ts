import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  latitud: string = '18.47186';
  longitud: string = '-69.89232';
  apiKey = '3eecdfa35b219c5aa5c08cc9b6cf4ac1';
  url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitud}&lon=${this.longitud}&lang=es&units=metric&appid=${this.apiKey}`;
  constructor(public http: HttpClient) {}

  getdata<T>(url: string) {
    url = this.url;
    return this.http.get<T[]>(url);
  }
}
