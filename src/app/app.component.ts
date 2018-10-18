import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Constructor del componente AppComponent
  constructor() {
    // Instanciamos nuestro modelo Hero
    const hero = new Hero('Batman', 'Super Hight');
    // Lo imprimimos en consola
    console.log(hero);
  }
}
