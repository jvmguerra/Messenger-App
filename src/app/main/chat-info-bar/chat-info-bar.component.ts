import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ChatInfo } from '../../app.component';

@Component({
  selector: 'app-chat-info-bar',
  templateUrl: './chat-info-bar.component.html',
  styleUrls: ['./chat-info-bar.component.less']
})
export class ChatInfoBarComponent implements OnInit {

  @Output() triggerButton = new EventEmitter();
  @Input() chatInfo: ChatInfo;
  @Input() members: string;

  ngOnInit() {
  }

  toggleSidenav() {
    this.triggerButton.emit();
  }

}
