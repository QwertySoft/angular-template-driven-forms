import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Client from './clients.model';

@Injectable({
  providedIn: 'root' // Indicamos que este servicio se proveera para toda la app > sera una instancia singleton
})
export class ClientsService {

  // Constructor del servico ClientsSerivice
  constructor(
    private http: HttpClient // Inyectamos el servicio para realizar requerimientos HTTP
  ) {
  }

  // Metodo que retorna el listado de clientes mockedos
  public getFromMock() {
    return [
      {
        id: 1,
        name: 'Maximo Zarza',
        phone: '2983565091',
        address: 'Calle 6 635 1D',
        email: 'zmaximo1990@gmail.com',
        instagram: 'https://www.instagram.com/zarzamaximo/'
      },
      {
        id: 2,
        name: 'Qwertysoft SRL',
        phone: null,
        address: 'Calle 61 522 2do 6to, ADV, B1904 La Plata, Pcia de Buenos Aires',
        email: 'qwertysoftar@gmail.com',
        instagram: 'https://www.instagram.com/qwertysoftar/'
      }
    ];
  }

  // Metodo para recuperar clientes desde la API REST
  public getFromApi(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:3000/api/v1/clients');
  }

}
