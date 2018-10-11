import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  public powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  public model = new Hero('', this.powers[0]);
  public submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { alert(`Superheroe creado: ${this.model.name} => ${this.model.power}`); }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero('', '');
  }

  // skyDog(): Hero {
  //   let myHero =  new Hero('SkyDog',
  //                          'Fetch any object at any distance',
  //                          'Leslie Rollover');
  //   console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  //   return myHero;
  // }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  // showFormControls(form: any) {
  //   return form && form.controls['name'] &&
  //   form.controls['name'].value; // Dr. IQ
  // }

}
