import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  userid = '';

  constructor(private router: Router) {

  }
}


export class ChatInfo {
  name: string;
  isActive: boolean;
  color: string;
  id: string;
}

export class User {
  id: string;
  name: string;
}

export class ChatGroup {
  conversationId: string;
  id: string;
  is_owner: string;
  lastseen: string;
  name: string;
  user: Object[];
  isActive: boolean;
  color: string;
}
