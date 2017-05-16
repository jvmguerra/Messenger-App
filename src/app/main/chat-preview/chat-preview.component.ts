import { Component, OnInit, Input/*, Output, EventEmitter */} from '@angular/core';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.less']
})
export class ChatPreviewComponent implements OnInit {

  @Input() chat: Object;

  constructor() {
  }

  ngOnInit() {
  }

}
