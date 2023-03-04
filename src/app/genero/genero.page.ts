import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/genero/api.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage {

  @ViewChild('myInput') myInput: any;
  inputValue: string;
  getdata: any;
  name: string;
  gender: string;
  constructor(public services: ApiService) { }

onSubmit() {
    const url = 'https://api.genderize.io/?name=';
    const params =  this.inputValue ;
    this.services.getdata<any[]>(url, params ).subscribe(response => {
      this.getdata = response;
      this.name = this.getdata.name;
      this.gender = this.getdata.gender;

    });
  }

}
