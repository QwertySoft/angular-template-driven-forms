import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Indicamos que el servicio va a ser registrado globalmente en nuestra app > va aser una instancia singleton
})
export class ApiService {

  // Constructur del servicio ApiService
  constructor() { }

  // Metodo que devuelve un string
  public getText() {
    return 'Soy un servicio Angular';
  }
}
