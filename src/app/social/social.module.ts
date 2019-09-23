import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialComponent } from './social.component';
import { SocialRoutingModule } from './social-routing.module';
import { ChatFormModule } from '../chat/chat-form/chat-form.module';

@NgModule({
  declarations: [SocialComponent],
  imports: [CommonModule, SocialRoutingModule, ChatFormModule]
})
export class SocialModule {}
