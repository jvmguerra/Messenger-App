import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../app.component';
import { MdDialog } from '@angular/material';
import { CreateGroupComponent } from '../create-group/create-group.component';


@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.less']
})
export class UserBarComponent implements OnInit {


  @Input() user: User;
  @Input() userColor: string;
  @Output() emitRefresh = new EventEmitter();

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.afterAllClosed.subscribe(x => {
      this.emitRefresh.emit(true);
    });

    this.dialog.open(CreateGroupComponent, {
      data: {
        id: this.user.id
      }
    });
  }

}
