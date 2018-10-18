import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { DjangoComponent } from './django/django.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'angular/:section', component: AngularComponent }, // Definimos la ruta para nuestro componente AngularComponent recibiendo un path param que identificamos como 'section'
  { path: 'angular', component: AngularComponent }, // Definimos la ruta para nuestro componente AngularComponent
  { path: 'django', component: DjangoComponent }, // Definimos la ruta para nuestro componente DjangoComponent
  { path: 'not-found', component: NotFountComponent }, // Ruta para mostrar cuando no hay contenido por alguna razon
  { path: '', component: AngularComponent }, // Ruta por defecto
  { path: '**', component: NotFountComponent } // Definimos que componente queremos mostrar cuando se escribe una URL que no existe en nuestra definicion
];

@NgModule({
  declarations: [
    AppComponent, // Decalramos el componente root de nuesta app
    AngularComponent, // Decalramos el componente AngularComponent
    DjangoComponent, // Decalramos el componente DjangoComponent
    NotFountComponent // Decalramos el componente NotFoundComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( // Imporamos el modulo de navegacion pasandole la definicion de las rutas
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
