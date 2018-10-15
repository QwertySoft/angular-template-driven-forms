import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  public username = 'anonymous';

  constructor() { }

  ngOnInit() {
    this.username = prompt('Ingrese su nombre de usuario');
  }

}
