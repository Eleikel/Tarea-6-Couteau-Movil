import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/clima/api.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage {
  @ViewChild('myInput') myInput: any;
  inputValue: string;
  getdata: any;
  clima: any;

  latitud: string = '18.6691759';
  longitud: string = '-71.2512582';
  apiKey: string = '3eecdfa35b219c5aa5c08cc9b6cf4ac1';

  constructor(public services: ApiService) {
    // const params = this.inputValue;
    this.services.getdata<any[]>('').subscribe((response) => {
      this.getdata = response;
      this.clima = this.getdata.main.temp;
      console.log(this.getdata.main.temp);
    });
  }
}
