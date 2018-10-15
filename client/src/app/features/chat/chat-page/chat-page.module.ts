import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './chat-page.component';
import { MessageAreaComponent } from './components/message-area/message-area.component';
import { SendMessageFormComponent } from './components/send-message-form/send-message-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChatPageComponent, MessageAreaComponent, SendMessageFormComponent],
  entryComponents: [
    ChatPageComponent
  ]
})
export class ChatPageModule { }
