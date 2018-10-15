import { Component, OnInit, Input } from '@angular/core';
import Message from '../../../models/message.model';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.scss']
})
export class MessageAreaComponent implements OnInit {

  // TODO: propiedad input 'username'
  public chat: Message[] = [];

  constructor(private chatService: ChatService) {
    this.chatService.observeForMessagesArrive().subscribe(
      (message: Message) => {
        // TODO: agregar mensaje al chat
      }
    );
  }

  ngOnInit() {
  }

}
