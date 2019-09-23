import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoomComponent } from './chat-room.component';
import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { ChatFormModule } from '../chat-form/chat-form.module';
import { FeedModule } from '../feed/feed.module';
import { UserListModule } from '../user-list/user-list.module';

@NgModule({
  declarations: [ChatRoomComponent],
  imports: [
    CommonModule,
    ChatRoomRoutingModule,
    ChatFormModule,
    FeedModule,
    UserListModule
  ],
  exports: [ChatRoomComponent]
})
export class ChatRoomModule {}
