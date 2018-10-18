import { Component, ViewChild, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Declaramos una variable que solo se va a mostrar en el padre
  title = 'UDE y Qwerty';

  // Declaramos una propiedad en el padre que le vamos a pasar a nuestro hijo
  forChild = 'Soy tu padre';

  // Estamos linkeando el componente desde el padre
  @ViewChild(ChildComponent) child: ChildComponent;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      // Luego de 2 segundos, cambiamos el valor de la propiedad que le estamos pasando a nuestro hijo
      this.forChild = 'Cambie el valor';
    }, 2000);
  }

  // Metodo para reaccionar ante un evento del hijo
  public react($event) {
    alert($event);
  }

  // Metodo que invoca la ejecucion del metodo del componente hijo
  public doOnChild() {
    this.child.run();
  }

}