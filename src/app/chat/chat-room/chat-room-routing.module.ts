import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatRoomComponent } from './chat-room.component';

const chatRoutes: Routes = [{ path: '', component: ChatRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class ChatRoomRoutingModule {}
