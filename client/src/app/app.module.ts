import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { DjangoComponent } from './django/django.component';
import { NotFountComponent } from './not-fount/not-fount.component';

const appRoutes: Routes = [
  { path: 'angular/:section', component: AngularComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'django', component: DjangoComponent },
  { path: '', component: AngularComponent },
  { path: '**', component: NotFountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    DjangoComponent,
    NotFountComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
