import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { DjangoComponent } from './django/django.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { ClientListComponent } from './client-list/client-list.component';
import { SectionComponent } from './section/section.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'angular/:section', component: AngularComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'django', component: DjangoComponent },
  { path: 'not-found', component: NotFountComponent },
  { path: '', component: ClientListComponent },
  { path: '**', component: NotFountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    DjangoComponent,
    NotFountComponent,
    ClientListComponent,
    SectionComponent,
    HeroFormComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
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
