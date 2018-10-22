import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  // Definimos los valores que podemos seleccionar de nuestro select para la propiedad 'power' de nuestro modelo Hero
  public powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // Definimos una variable y la inicializamos con una instancia de nuestra clase Hero.
  // Aca nace nuestro objeto y la referencia a el la mantenemos en la propiedad 'model' de nuestro componente
  public model = new Hero('', this.powers[0]);

  // Constructor
  constructor() { }

  // Hook onInit de Angular
  ngOnInit() {
  }

  // Metodo ejecutado al submitear el formulario
  onSubmit() {
    // Mostramos un alerta con los datos de nuestro heroe cargado mediante el formulario
    alert(`Superheroe creado: ${this.model.name} => ${this.model.power}`);
  }

  // Metodo para resetear los valores de nuestro modelo y por ende los valores del formulario tambien
  newHero() {
    this.model = new Hero('', this.powers[0]);
  }

}
