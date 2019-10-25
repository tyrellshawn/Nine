import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { MessageModule } from '../message/message.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, FeedRoutingModule, MessageModule],
  exports: [FeedComponent]
})
export class FeedModule {}
