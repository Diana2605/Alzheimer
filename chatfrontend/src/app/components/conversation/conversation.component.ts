import { Component, OnInit } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  inputMessage: string = "";
  messages: any = [];
  constructor(private convService: ConversationService) { }

  ngOnInit(): void {
    this.sendMessage('');
  }

  public sendMessage(input){
    this.convService.sendMessage({
      userQuery: input,
      context: localStorage.getItem('context') || null
    }).subscribe((data: any) => {
      localStorage.setItem('context', data.context);
      this.messages.push({
        type: 'bot',
        message: data.output.text[0]
      })
    })
  }

}
