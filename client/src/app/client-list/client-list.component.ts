import { Component, OnInit } from '@angular/core';
import Client from '../models/clients.model';
import { ClientsService } from '../clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  public clients: Client[] = [];

  constructor(private clientsService: ClientsService, private router: Router) { }

  ngOnInit() {
    this.clientsService.getFromApi().subscribe(
      (data: Client[]) => {
        this.clients = data;
      },
      () => {
        alert('No se pudieron obtener los clientes');
        this.router.navigate(['**']);
      }
    );
  }

}
