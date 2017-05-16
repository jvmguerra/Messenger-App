import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MessengerWrapperComponent } from './messenger-wrapper/messenger-wrapper.component';
import { DivBarComponent } from './div-bar/div-bar.component';
import { ChatInfoBarComponent } from './chat-info-bar/chat-info-bar.component';
import { UserBarComponent } from './user-bar/user-bar.component';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ReversePipe } from '../pipes/reverse.pipe';
import { MomentModule } from 'angular2-moment';
import { MdDialogModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import {MdRadioModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

import { MdSidenavModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { CreateGroupComponent } from './create-group/create-group.component';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdButtonModule,
    HttpModule,
    FormsModule,
    MomentModule,
    MdDialogModule,
    MdCardModule,
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule
  ],
  declarations: [MessengerWrapperComponent, DivBarComponent,
  ChatInfoBarComponent, UserBarComponent, ChatPreviewComponent,
  SendMessageComponent,
  ChatBubbleComponent, ReversePipe, CreateGroupComponent],
  entryComponents: [ CreateGroupComponent ],
  exports: [MessengerWrapperComponent, DivBarComponent, CreateGroupComponent]
})
export class MainModule { }
