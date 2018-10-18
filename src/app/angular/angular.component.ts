import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  // Constructor del componente AngularComponent
  constructor(
    private route: ActivatedRoute, // Inyectamos servicio para saber informacion acerca del
    private router: Router //  Inyectamos servicio para poder navegar programaticamente
  ) {

    // Leemos los path params recibidos de la navegacion
    // Ejemplo: /angular/routing > routing es un path param
    this.route.params.subscribe((params) => {
      // Imprimimos los parametros recibidos de la navegacion
      console.log(params);
    });

    // Leemos los query params recibidos de la navegacion
    // Ejemplo: /angular?qParam=10 > qParam es un query param
    this.route.queryParamMap.subscribe((params) => {
      // Imprimimos los parametros recibidos de la navegacion
      console.log(params);
    });
  }

  // Hook angular onInit
  ngOnInit() {
  }

  // Metodo para navegar a la pagina definida por el componente DjangoComponent
  public goToDjango() {
    this.router.navigate(['django']);
  }

}
