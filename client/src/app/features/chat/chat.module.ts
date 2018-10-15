import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageModule } from './chat-page/chat-page.module';

@NgModule({
  imports: [
    CommonModule,
    ChatPageModule
  ],
  declarations: [],
  exports: [
  ]
})
export class ChatModule { }
