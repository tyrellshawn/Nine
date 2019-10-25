import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageComponent } from './message.component';

const chatRoutes: Routes = [{ path: '', component: MessageComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class MessageRoutingModule {}
