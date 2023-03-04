import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  getdata<T>(url: string, params) {
    url = `http://universities.hipolabs.com/search?country=${params}`;

    return this.http.get<T[]>(url, params);
  }
}
