import { Component, OnInit } from '@angular/core';
import Client from '../models/clients.model';
import { Router } from '@angular/router';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  public clients: Client[] = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clients = this.clientsService.getFromMock();
  }

}
