import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() {
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

}
