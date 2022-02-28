import { Component, OnInit } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';
import { ThrowStmt } from '@angular/compiler';

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
    this.inputMessage = '';
    this.messages.push({
      type: 'user',
      message: input
    });
    let context = null;
    if(input){
      context = localStorage.getItem('context');
    }
    this.convService.sendMessage({
      userQuery: input,
      context: JSON.parse(context)
    }).subscribe((data: any) => {
      localStorage.setItem('context', JSON.stringify(data.context));
      this.messages.push({
        type: 'bot',
        message: data.output.text[0]
      })
    })
  }

}
