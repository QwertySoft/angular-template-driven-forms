import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, // Declaramos el componente root de nuestra app
    HeroFormComponent  // Declaramos el componente que se encarga de gestionar el formulario para el modelo Hero
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // Importamos el modulo de template driven forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
