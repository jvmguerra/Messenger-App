import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.less']
})
export class SendMessageComponent implements OnInit {

  @Output() message = new EventEmitter();
  inputMessage;

  constructor() { }

  ngOnInit() {
  }

  submitMessage() {
    if (this.inputMessage !== '' && this.inputMessage !== undefined) {
      this.message.emit(this.inputMessage);
      this.inputMessage = '';
    }
  }

}
