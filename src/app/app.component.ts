import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public text: string;

  // Constructor del componente AppComponent
  constructor(
    private apiService: ApiService
  ) {
    // Seteamos la propiedad 'text' del componente root de nuestra app con lo que nos devuelve el servicio
    this.text = this.apiService.getText();
  }
}
