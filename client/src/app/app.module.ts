import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { FormsModule } from '@angular/forms';
import { ChatPageComponent } from './features/chat/chat-page/chat-page.component';
import { ChatModule } from './features/chat/chat.module';

const appRoutes: Routes = [
  { path: 'chat', component: ChatPageComponent },
  { path: '', component: ChatPageComponent },
  { path: '**', component: NotFountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFountComponent
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
    FormsModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
