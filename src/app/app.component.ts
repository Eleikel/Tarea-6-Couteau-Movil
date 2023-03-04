import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'PORTADA', url: '/portrait', icon: 'home' },
    { title: 'Clima ', url: '/clima', icon: 'cloud' },

    { title: 'Predecir Genero', url: '/genero', icon: 'body' },
    { title: 'Edad', url: '/edad', icon: 'person' },
    { title: 'Universidades', url: '/universidades', icon: 'school' },
    { title: 'Acerca de mi', url: '/hireme', icon: 'briefcase' },
  ];
  constructor() {}
}
