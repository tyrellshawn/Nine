import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, FeedRoutingModule],
  exports: [FeedComponent]
})
export class FeedModule {}
