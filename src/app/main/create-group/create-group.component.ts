import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import {Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.less']
})
export class CreateGroupComponent implements OnInit {

  users = [];
  activeUser;
  type = '1';
  selectedUser;
  group = [];
  dataId;
  groupName = '';

  constructor(private http: HttpService, private router: ActivatedRoute, @Inject(MD_DIALOG_DATA) data: any) {

    this.dataId = data.id;

    this.http.getAllUsers().subscribe(users => {
        users.map(user => {
          if (user.id !== data.id) {
            this.users.push(user);
          }
      });
    });

  }

  showType() {
    console.log(this.type);
  }

  ngOnInit() {
  }

  createGroup() {
    const users = [];
    if ( this.type === '1') {
      users.push(this.dataId);
      this.group.map(user => {
        if (user !== undefined || user !== false) {
          users.push(user);
        }
      });
      const listUsers = users.join(',');
      this.http.createGroupConversation({
        users: listUsers,
        name: this.groupName
      }).subscribe(x => {
        console.log('worked! ', x);
      });
    } else {
      users.push(this.dataId);
      users.push(this.selectedUser);
      const listUsers = users.join(',');
      this.http.createConversation({
        users: listUsers
      }).subscribe(x => {
        console.log('worked! ', x);
      });
    }
  }

}
