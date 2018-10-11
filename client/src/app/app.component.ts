import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = 'Mi curso desarrollo web fullstack! :)';
  today = new Date();

  constructor(private service: ApiService, private clients: ClientsService) {
    this.clients.getObservable().subscribe(
      (date: string) => {
        console.log(date);
      }
    );
  }

  sectionAlive(section) {
    console.log(section);
  }

}
