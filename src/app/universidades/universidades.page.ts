import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/paises/api.service';

@Component({
  selector: 'app-influencia',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.scss'],
})
export class UniversidadPage implements OnInit {
  @ViewChild('myInput') myInput: any;
  inputValue: string;
  getdata: any;

  constructor(public services: ApiService) {}

  onSubmit() {
    const url = 'http://universities.hipolabs.com/search?country=';
    const params = this.inputValue;
    this.services.getdata<any[]>(url, params).subscribe((response) => {
      this.getdata = response;
    });
  }

  ngOnInit() {}
}
