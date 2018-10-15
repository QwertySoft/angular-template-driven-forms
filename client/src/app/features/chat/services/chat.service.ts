import { Injectable } from '@angular/core';
import Message from '../models/message.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket;
  private chatSubjetc: Subject<Message> = new Subject<Message>();

  constructor() {
    this.socket = new WebSocket('ws://localhost:3000'); // Reemplazar por la IP correspondiente

    this.socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log(data);
      this.chatSubjetc.next(data);
  };
  }

  public sendMessage(message: Message) {
    this.socket.send(message.serialize());
  }

  public observeForMessagesArrive() {
    return this.chatSubjetc;
  }
}
