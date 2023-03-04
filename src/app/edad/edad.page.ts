import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/edad/api.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
  @ViewChild('myInput') myInput: any;
  inputValue: string;
  getdata: any;
  name: string;
  age: string;
  constructor(public services: ApiService) {}

  onSubmit() {
    const url = 'https://api.agify.io/?name=';
    const params = this.inputValue;
    this.services.getdata<any[]>(url, params).subscribe((response) => {
      this.getdata = response;
      this.name = this.getdata.name;
      this.age = this.getdata.age;
    });
  }

  ngOnInit() {}
}
