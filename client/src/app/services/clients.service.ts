import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Client from '../models/clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private obsv: Observable<string>;

  constructor(private http: HttpClient) {
    this.obsv = new Observable<string>((observer) => {
      setInterval(() => {
        observer.next(new Date().toISOString());
      }, 1000);
    });
  }

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

  public getFromApi(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:3000/api/v1/clients');
  }

  public getObservable(): Observable<string> {
    return this.obsv;
  }
}
