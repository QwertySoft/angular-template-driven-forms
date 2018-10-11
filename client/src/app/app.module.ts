import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { DjangoComponent } from './django/django.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { ClientListComponent } from './client-list/client-list.component';

const appRoutes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'angular/:section', component: AngularComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'django', component: DjangoComponent },
  { path: '', component: ClientListComponent },
  { path: '**', component: NotFountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    DjangoComponent,
    NotFountComponent,
    ClientListComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
