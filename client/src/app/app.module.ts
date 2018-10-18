import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { ClientListComponent } from './client-list/client-list.component';

const appRoutes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'not-found', component: NotFountComponent },
  { path: '', component: ClientListComponent },
  { path: '**', component: NotFountComponent }
];

@NgModule({
  declarations: [
    AppComponent, // Declaramos el componente root de nuestra app
    NotFountComponent, // Declaramos el componente NotFoundComponent
    ClientListComponent // Declaramos el componente ClientListComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( // Importamos el servicio de ruteo pasandole la definicion de rutas
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule // Importamos el modulo que nos brinda el servicio para realizar requerimientos HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
