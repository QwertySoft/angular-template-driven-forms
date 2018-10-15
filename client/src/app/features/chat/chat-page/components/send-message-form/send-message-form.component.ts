import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import Message from '../../../models/message.model';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.scss']
})
export class SendMessageFormComponent implements OnInit {

  public message = '';
  // TODO: propiedad input 'username'

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  public sendMessage() {
    const message = new Message(this.username, this.message);
    this.chatService.sendMessage(message);
    // TODO: blanquear input de mensaje
  }

}
