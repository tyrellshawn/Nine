import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './feed.component';

const chatRoutes: Routes = [{ path: '', component: FeedComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class FeedRoutingModule {}
