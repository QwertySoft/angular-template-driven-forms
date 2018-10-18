import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import Client from '../clients.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  // Definimos una variable que mantiene el listado de clientes
  public clients: Client[] = [];

  // Constructor del componente ClientListComponent
  constructor(
    private clientsService: ClientsService, // Inyectamos el servicio de clientes para recuperar los datos
    private router: Router // Inyectamos el servicio de routeo para mostrar un 404 en caso de que no puedan obtener los clientes por alguna razon
  ) { }

  // Hook onInit de Angular
  ngOnInit() {
    // Le pedimos el listado de clientes al servicio utilizando un Observable
    this.clientsService.getFromApi().subscribe(
      (data: Client[]) => {
        // Seteamos la variable del componente con los datos recibidos del servicio
        this.clients = data;
      },
      () => {
        // Mostramos una alerta y navegamos a la pagina de 404 en caso de no poder obtener los clientes por alguna razon
        alert('No se pudieron obtener los clientes');
        this.router.navigate(['not-found']);
      }
    );
  }

}