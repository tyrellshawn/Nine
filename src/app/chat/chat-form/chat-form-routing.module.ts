import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatFormComponent } from './chat-form.component';

const chatRoutes: Routes = [{ path: '', component: ChatFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class ChatFormRoutingModule {}
