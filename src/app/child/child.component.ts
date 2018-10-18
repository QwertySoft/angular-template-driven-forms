import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  // Se agrega una clase llamada 'primary' en el elemento host de este componente, es decir '<app-child calss="primary"></app-child>'
  // Esto sucede cuando la variable este en true, mientras permanezca en false, la clase no sera agregada
  @HostBinding('class.primary') public isPrimary = false;

  // Valor de entrada que recibe el hijo desde el padre
  @Input() public text: string;

  // Valor de salida que el hijo le va a mandar al padre. Se llama evento y se representa mediante
  // el tipo EventEmitter. En este caso estamos emitiendo strings
  @Output() public emited: EventEmitter<string> = new EventEmitter<string>();

  // Constructor del hijo
  constructor() { }

  // Detectamos los cambios de los datos de entrada que tenga definido el hijo
  ngOnChanges(changes: SimpleChanges) {
    // Imprimimos el estado de todos los valores de entrada en el hijo
    console.log(changes);
  }

  // Hook OnInit de Angular
  ngOnInit() {
    // Luego de dos segundos estamos cambiando el valor de la variable para que agregue la clase 'primary' en el elemento host
    // de nuestro componente, es decir '<app-child calss="primary">...</app-child>'
    setTimeout(() => {
      this.isPrimary = true;
    }, 2000);
  }

  // Escuchamos el evento JavaScript llamado 'mouseover' sobre el elemento host de nuestro componente
  // es decir sobre todo lo que ocupe <app-child calss="primary">...</app-child> en la vista generada por el browser
  @HostListener('mouseover', ['$event'])
  public onHover($event) {
    // Imprimimos en consola el evento recibido. En este caso es un evento JavaScript representando el hover del mouse
    console.log($event);
  }

  // Funcion del hijo que se ejecuta al hacer click en el boton
  // Se encarga de emitir un string 'Soy tu hijo'
  public emitEvent() {
    // Propagamos el valor 'Soy tu hijo' desde el hijo hacia su padre para que este lo reciba y lo procese
    this.emited.emit('Soy tu hijo');
  }

  // Metodo que los ejuta el componente padre
  // Tambien se puede invocar dentro de este mismo componente
  public run() {
    // Mostramos un alerta
    alert('Mi padre me dijo que me ejecute');
  }
}
