import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatFormComponent } from './chat-form.component';
import { ChatFormRoutingModule } from './chat-form-routing.module';

@NgModule({
  declarations: [ChatFormComponent],
  imports: [CommonModule, ChatFormRoutingModule],
  exports: [ChatFormComponent]
})
export class ChatFormModule {}
