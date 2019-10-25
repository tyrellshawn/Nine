import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, MessageRoutingModule],
  exports: [MessageComponent]
})
export class MessageModule {}
