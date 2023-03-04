import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

    getdata<T>(url: string, params){
    url = `https://api.genderize.io/?name=${params}`;

   return this.http.get<T[]>(url,params);
  }
}
