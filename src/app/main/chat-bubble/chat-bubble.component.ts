import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.less']
})
export class ChatBubbleComponent implements OnInit {

  @Input() message: string;
  @Input() isUser: boolean;
  @Input() showUserPic: boolean;
  @Input() sideImage: any[];

  constructor() { }

  ngOnInit() {
  }

}
