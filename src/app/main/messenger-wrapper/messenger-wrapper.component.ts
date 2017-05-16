import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { ChatInfo, User, ChatGroup } from '../../app.component';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';


import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-messenger-wrapper',
  templateUrl: './messenger-wrapper.component.html',
  styleUrls: ['./messenger-wrapper.component.less']
})
export class MessengerWrapperComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  navMode = 'side';
  colors = ['#479764', '#51A865', '#7BBE6D', '#9BD171', '#5EC1B8', '#55A4DA',
            '#4B88C2', '#417594', '#A65153', '#E35052', '#F1984E', '#F5CF5E'];

  chatInfo: ChatInfo = {
    name: '',
    isActive: false,
    color: '#FFF',
    id: ''
  };
  chatMembers;

  messages = [];
  user: User;
  userColor;
  chatGroups: ChatGroup[] = [];
  usersImages = [];
  allUsers = [];
  usersChatBar: string;
  isChatSelected = false;
  isMobileMode = false;

  constructor(private router: ActivatedRoute, private http: HttpService) {

    this.router.params.subscribe(param => {
      this.selectUserById(param['id']);
      this.getUserConversations(param['id']);
    });
      // this.http.getConversationsForUser(1).subscribe(data => {
      //   console.log(data);
      // });

    let color = 0;
    this.http.getAllUsers().subscribe(data => {
      data.map(object => {
        this.usersImages.push({
          initial: object.name,
          color: this.colors[color],
          id: object.id
        });
        color++;
        color = color >= 12 ? 0 : color;
      });
      this.userColor = this.usersImages.filter(el => this.user.id === el.id)[0];
    });

  }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.navMode = 'over';
      this.sidenav.close();
      this.isMobileMode = true;
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 768) {
          this.navMode = 'over';
          this.sidenav.close();
          this.isMobileMode = true;
        }
        if (event.target.innerWidth > 768) {
          this.navMode = 'side';
          this.sidenav.open();
          this.isMobileMode = false;
        }
    }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  activateChat(chat) {
    if (this.isMobileMode) {
      this.sidenav.close();
    }

    this.http.updateTimestamp(chat, this.user.id);
    this.isChatSelected = true;
    this.messages = [];
    this.getChatMessages(this.user, chat.conversationId);
    this.chatInfo = chat;

    const users = [];
    chat.user.map(data => {
      users.push(data.userid);
    });
    const names = [];

    this.http.getAllUsers().subscribe(data => {
      users.map(user => {
        data.map(el => {
          if (user === el.id) {
            names.push(el.name);
          }
        });
      });
      this.usersChatBar = names.join(', ');
    });

    this.chatGroups.map(data => {
      if (data.id === chat.id) {
        data.isActive = true;
      } else {
        data.isActive = false;
      }
    });
  }

  getChatMessages(user, chat) {
    let message = {
        message: '',
        userid: '',
        isUser: false,
        showPic: false,
        sideImage: []
    };

    let lastUserId = '';

    this.messages = [];
    const messages = [];

    const userid = user.id;
    const chatid = chat;

    this.http.getMessages(chatid, 26, 0).subscribe(data => {
      data.map(object => {
        message = {
          message: object.message,
          userid: object.senderId,
          isUser: object.senderId === this.user.id ? true : false,
          showPic: object.senderId === lastUserId ? false : true,
          sideImage: this.usersImages.filter(res => res.id === object.senderId)[0]
        };
        messages.push(message);
        lastUserId = object.senderId;
      });
      this.messages = messages;
    });
  }

  selectUserById(id) {
    this.http.getAllUsers().subscribe(data => {
      this.user = data.filter(x => x.id.toString() === id)[0];
    });
  }

  getUserConversations(id) {
    this.http.getConversationsForUser(id).subscribe(data => {
      data.map(conversation => {
        const group: ChatGroup = {
          conversationId: conversation.conversation.conversationId,
          id: conversation.conversation.id,
          is_owner: conversation.conversation.is_owner,
          lastseen: conversation.conversation.lastseen,
          name: conversation.conversation.name ? conversation.conversation.name : '',
          isActive: false,
          color: this.colors[Math.floor((Math.random() * this.colors.length))],
          user: conversation.users
        };
      this.chatGroups.push(group);
    });
    });
  }

  sendMessage (event) {
    const data = {
      'message': event,
      'senderId': this.user.id
    };

    this.http.sendMessage(this.chatInfo.id, data).subscribe(res => {
      this.getChatMessages(this.user, this.chatInfo.id);
    });
  }

  refreshPreview() {
    this.chatGroups = [];
    this.getUserConversations(this.user.id);
  }

}
