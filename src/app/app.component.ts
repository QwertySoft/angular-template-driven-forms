import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Declaramos una variable que solo se va a mostrar en el padre
  title = 'UDE y Qwerty';

  constructor() {}

  ngOnInit() {
  }

}